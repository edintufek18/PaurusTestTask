import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'; // ✅ PrimeNG module
@Component({
  selector: 'app-student-add',
  imports: [FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  constructor() {}
  isOpen = true
}
