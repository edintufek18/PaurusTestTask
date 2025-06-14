import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [TableModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  check_login() {
    let username = this.form.get('username')?.value;
    let password = this.form.get('password')?.value;

    if (this.loginService.login(username, password)) {
      this.router.navigate(['/student-overview']);
    } else {
      // Can be added some alert that the password is not ok
      // First Attempt also can be removed if not used
      // It is tought to add some red lines and sth along those lines
      // IF sth goes wrong the first time
    }
  }
}
