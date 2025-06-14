import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavigationBar {
  constructor(private router: Router, public loginService: LoginService) {}

  gotoEditStudentPage() {
    // TODO: Check if correct
    this.router.navigate(['/student-edit']);
  }
  gotoAddStudentPage() {
    // TODO: Check if correct
    this.router.navigate(['/student-add']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.loginService.logout();
  }
}
