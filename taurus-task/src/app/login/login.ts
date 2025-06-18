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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  imports: [TableModule, RouterModule, FormsModule, ReactiveFormsModule,ToastModule],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

    showError() {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Incorrect username or password'});
    }

  check_login() {
    let username = this.form.get('username')?.value;
    let password = this.form.get('password')?.value;

    if (this.loginService.login(username, password)) {
      this.router.navigate(['/overview']);
    } else {
    this.showError()
    }
  }
}
