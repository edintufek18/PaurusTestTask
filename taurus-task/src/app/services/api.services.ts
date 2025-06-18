import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:3000';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      `${this.baseUrl}/students`,
      JSON.stringify(student),
      { headers: this.headers }
    );
  }

  updateStudent(id: string, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/students/${id}`, student, {
      headers: this.headers,
    });
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${id}`);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  getCounter(): Observable<Counter> {
    return this.http.get<Counter>(`${this.baseUrl}/counter`);
  }

  updateCounter(counter: Counter): Observable<Counter> {
    return this.http.put<Counter>(`${this.baseUrl}/counter`, counter, {
      headers: this.headers,
    });
  }
}
