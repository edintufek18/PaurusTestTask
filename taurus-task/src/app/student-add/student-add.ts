import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button'; // ✅ PrimeNG module
import { NavigationBar } from '../nav-bar/nav-bar';
import { ApiService } from '../services/api.services';
import { catchError, firstValueFrom, take } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-student-add',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    NavigationBar,
    DropdownModule,
    InputNumberModule,
    ToastModule,
    SelectModule
  ],
  providers: [MessageService],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  isOpen = true;
  studentForm: FormGroup;

  courses: Course[] = [];

  selectedCourse?: Course;
  selectedGrade: number = 0;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService
  ) {
    this.studentForm = this.fb.group({
      full_name: ['', Validators.required],
      gender: ['', Validators.required],
      birth: ['', Validators.required],
      courses: this.fb.array([]), // <-- add courses FormArray
    });
    this.apiService
      .getCourses()
      .pipe(take(1))
      .subscribe((data) => {
        this.courses = data;
      });
  }

  get getCourses(): FormArray {
    return this.studentForm.get('courses') as FormArray;
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Student added',
    });
  }

  addCourse() {
    if (this.selectedCourse && this.selectedGrade >= 0) {
      const alreadyExists = this.getCourses.controls.some(
        (ctrl) => ctrl.value.id === this.selectedCourse!.id
      );
      if (!alreadyExists) {
        this.getCourses.push(
          this.fb.group({
            id: [this.selectedCourse.id],
            name: [this.selectedCourse.name],
            grade: [this.selectedGrade, [Validators.required]],
          })
        );
      }
    }
  }

  onCourseChange(event: any) {
    this.selectedCourse = event.value;
  }

  onGradeChange(event: any) {
    this.selectedGrade = event.value;
    console.log(event);
  }

  removeCourse(index: number) {
    this.getCourses.removeAt(index);
  }

  async submitStudent() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    let counter = await firstValueFrom(this.apiService.getCounter());
    let id = Number(counter.id) + 1;
    const student: Student = {
      id: id.toString(),
      ...this.studentForm.value,
    };
    await firstValueFrom(
      this.apiService.updateCounter({ id: id.toString() } as Counter)
    );
    await firstValueFrom(this.apiService.createStudent(student as Student));
    this.resetForm();
    this.showSuccess();
  }
  resetForm() {
    this.selectedGrade = 0;
    this.selectedCourse = undefined;
    this.getCourses.clear();
    this.studentForm.reset();
  }
}
