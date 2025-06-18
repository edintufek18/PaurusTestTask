import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'; // ✅ PrimeNG module
import { NavigationBar } from '../nav-bar/nav-bar';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.services';
import { firstValueFrom, take } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-add',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    NavigationBar,
    DropdownModule,
    CardModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {
  studentForm: FormGroup;
  students: Student[] = [];
  allCourses: Course[] = [];
  selectedStudent: Student | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService
  ) {
    this.studentForm = this.fb.group({
      courses: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.apiService
      .getCourses()
      .pipe(take(1))
      .subscribe((courses) => {
        this.allCourses = courses;
      });

    this.apiService
      .getStudents()
      .pipe(take(1))
      .subscribe((students) => {
        this.students = students;
      });
  }

  get coursesFormArray(): FormArray {
    return this.studentForm.get('courses') as FormArray;
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'This subject is already selected.',
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Subjects and grades of the student are changed',
    });
  }

  onStudentSelect(student: Student) {
    this.selectedStudent = student;
    this.coursesFormArray.clear();

    // TODO: Validators For Grade will be great
    student.courses.forEach((course) => {
      this.coursesFormArray.push(
        this.fb.group({
          id: [course.id, Validators.required],
          grade: [
            course.grade,
            [Validators.required, Validators.min(0), Validators.max(100)],
          ],
        })
      );
    });
  }

  onCourseChange(index: number) {
    const selectedId = this.coursesFormArray.at(index).get('id')?.value;

    const ids = this.coursesFormArray.controls.map(
      (ctrl) => ctrl.get('id')?.value
    );
    const duplicates = ids.filter((id, i) => id === selectedId && i !== index);

    if (duplicates.length > 0) {
      this.coursesFormArray.at(index).get('id')?.setValue(null);
      this.showError();
    }
  }

  addCourse() {
    this.coursesFormArray.push(
      this.fb.group({
        id: [null, Validators.required],
        grade: [
          null,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
      })
    );
  }

  removeCourse(index: number) {
    this.coursesFormArray.removeAt(index);
  }

  async saveCourses() {
    if (this.selectedStudent && !this.studentForm.errors) {
      const updatedCourseIds = this.coursesFormArray.value.map(
        (c: any) => c.id
      );
      const updatedCourses: CourseExt[] = updatedCourseIds.map(
        (id: string, i: number) => {
          const courseInfo = this.allCourses.find((c) => c.id === id);
          const control = this.coursesFormArray.at(i);

          return {
            id,
            name: courseInfo?.name || 'Unknown',
            grade: control.get('grade')?.value,
          };
        }
      );

      const updatedStudent: Student = {
        ...this.selectedStudent,
        courses: updatedCourses,
      };

      await firstValueFrom(
        this.apiService.updateStudent(this.selectedStudent.id, updatedStudent)
      );
      this.showSuccess();
    } else {
      this.showError();
      //alert('Please correct form errors before saving.'); //add toast instead alert
    }
  }
}
