import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LoginService } from '../login/login.service';
import { ButtonModule } from 'primeng/button'; // ✅ PrimeNG module
import { NavigationBar } from '../nav-bar/nav-bar';
import { ApiService } from '../services/api.services';
import { Subject, take, firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [TableModule, RouterModule, ButtonModule, NavigationBar, CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  students: Student[] = [];
  expandedRows = {};

  constructor(
    private router: Router,
    private loginService: LoginService,
    private apiService: ApiService
  ) {
    this.fetchData();
  }

  fetchData() {
    this.apiService
      .getStudents()
      .pipe(take(1))
      .subscribe((data) => {
        this.students = data;
        console.log(data);
      });
  }

  async deleteStudent(student: Student) {
    // Omit deletion if not loged in
    console.log("hhere")
    if (!this.loginService.isLoggedIn()) return;
    console.log("hhere after login")

    let resp=await firstValueFrom(this.apiService.deleteStudent(student.id));
    console.log(resp)
    
    this.fetchData();
  }

  expandAll() {
    this.expandedRows = this.students.reduce(
      (acc: { [key: string]: boolean }, s) => {
        acc[s.id] = true;
        return acc;
      },
      {}
    );
  }

  collapseAll() {
    this.expandedRows = {};
  }

}
