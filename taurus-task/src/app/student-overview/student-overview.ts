import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LoginService } from '../login/login.service';

interface Student {
  id: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  courses: string[];
}

@Component({
  selector: 'app-student-overview',
  imports: [TableModule, RouterModule],
  templateUrl: './student-overview.html',
  styleUrl: './student-overview.css',
})
export class StudentOverview {
  // TODO: ADD this to a separate file
  students: Student[] = [
    {
      id: 'S1001',
      fullName: 'Alice Johnson',
      gender: 'Female',
      dateOfBirth: '2002-05-14',
      courses: ['Math', 'English', 'Physics'],
    },
    {
      id: 'S1002',
      fullName: 'Brian Smith',
      gender: 'Male',
      dateOfBirth: '2001-11-22',
      courses: ['Biology', 'Chemistry', 'Math'],
    },
    {
      id: 'S1003',
      fullName: 'Catherine Lee',
      gender: 'Female',
      dateOfBirth: '2003-01-09',
      courses: ['History', 'Literature', 'Art'],
    },
    {
      id: 'S1004',
      fullName: 'David Miller',
      gender: 'Male',
      dateOfBirth: '2002-07-30',
      courses: ['Physics', 'Math', 'Computer Science'],
    },
    {
      id: 'S1005',
      fullName: 'Emily Davis',
      gender: 'Female',
      dateOfBirth: '2001-12-17',
      courses: ['English', 'Philosophy', 'Sociology'],
    },
    {
      id: 'S1006',
      fullName: 'Frank Wilson',
      gender: 'Male',
      dateOfBirth: '2000-09-03',
      courses: ['Chemistry', 'Math', 'Statistics'],
    },
    {
      id: 'S1007',
      fullName: 'Grace Brown',
      gender: 'Female',
      dateOfBirth: '2002-03-21',
      courses: ['Economics', 'Math', 'Business'],
    },
    {
      id: 'S1008',
      fullName: 'Henry Moore',
      gender: 'Male',
      dateOfBirth: '2001-08-19',
      courses: ['History', 'Political Science', 'Law'],
    },
    {
      id: 'S1009',
      fullName: 'Isabella Taylor',
      gender: 'Female',
      dateOfBirth: '2003-04-02',
      courses: ['Biology', 'Chemistry', 'Environmental Science'],
    },
    {
      id: 'S1010',
      fullName: 'Jack Anderson',
      gender: 'Male',
      dateOfBirth: '2002-06-11',
      courses: ['Math', 'Physics', 'Computer Science'],
    },
    {
      id: 'S1011',
      fullName: 'Karen Thomas',
      gender: 'Female',
      dateOfBirth: '2001-01-25',
      courses: ['English', 'Sociology', 'Philosophy'],
    },
    {
      id: 'S1012',
      fullName: 'Liam Martin',
      gender: 'Male',
      dateOfBirth: '2000-10-15',
      courses: ['Math', 'Economics', 'Finance'],
    },
    {
      id: 'S1013',
      fullName: 'Mia White',
      gender: 'Female',
      dateOfBirth: '2003-05-08',
      courses: ['Art', 'History', 'Design'],
    },
    {
      id: 'S1014',
      fullName: 'Nathan Harris',
      gender: 'Male',
      dateOfBirth: '2002-12-02',
      courses: ['Physics', 'Astronomy', 'Math'],
    },
    {
      id: 'S1015',
      fullName: 'Olivia Clark',
      gender: 'Female',
      dateOfBirth: '2001-07-06',
      courses: ['Psychology', 'English', 'Sociology'],
    },
    {
      id: 'S1016',
      fullName: 'Peter Lewis',
      gender: 'Male',
      dateOfBirth: '2000-11-30',
      courses: ['Math', 'Statistics', 'Computer Science'],
    },
    {
      id: 'S1017',
      fullName: 'Queenie Hall',
      gender: 'Female',
      dateOfBirth: '2003-02-28',
      courses: ['Literature', 'Philosophy', 'Art'],
    },
    {
      id: 'S1018',
      fullName: 'Ryan Allen',
      gender: 'Male',
      dateOfBirth: '2002-09-13',
      courses: ['History', 'Law', 'Political Science'],
    },
    {
      id: 'S1019',
      fullName: 'Sophia Young',
      gender: 'Female',
      dateOfBirth: '2001-04-17',
      courses: ['Math', 'Biology', 'Chemistry'],
    },
    {
      id: 'S1020',
      fullName: 'Thomas King',
      gender: 'Male',
      dateOfBirth: '2000-08-23',
      courses: ['Engineering', 'Physics', 'Math'],
    },
    {
      id: 'S1021',
      fullName: 'Uma Scott',
      gender: 'Female',
      dateOfBirth: '2003-06-01',
      courses: ['Design', 'Art', 'Computer Graphics'],
    },
    {
      id: 'S1022',
      fullName: 'Victor Green',
      gender: 'Male',
      dateOfBirth: '2002-03-19',
      courses: ['Economics', 'Finance', 'Statistics'],
    },
    {
      id: 'S1023',
      fullName: 'Wendy Baker',
      gender: 'Female',
      dateOfBirth: '2001-09-10',
      courses: ['English', 'Literature', 'History'],
    },
    {
      id: 'S1024',
      fullName: 'Xavier Adams',
      gender: 'Male',
      dateOfBirth: '2000-05-27',
      courses: ['Physics', 'Math', 'Engineering'],
    },
    {
      id: 'S1025',
      fullName: 'Yara Nelson',
      gender: 'Female',
      dateOfBirth: '2003-11-05',
      courses: ['Psychology', 'Sociology', 'Anthropology'],
    },
    {
      id: 'S1026',
      fullName: 'Zachary Perez',
      gender: 'Male',
      dateOfBirth: '2002-01-20',
      courses: ['Law', 'History', 'Political Science'],
    },
    {
      id: 'S1027',
      fullName: 'Amy Foster',
      gender: 'Female',
      dateOfBirth: '2001-06-18',
      courses: ['Chemistry', 'Biology', 'Environmental Science'],
    },
    {
      id: 'S1028',
      fullName: 'Blake Ross',
      gender: 'Male',
      dateOfBirth: '2000-12-25',
      courses: ['Computer Science', 'Math', 'Engineering'],
    },
    {
      id: 'S1029',
      fullName: 'Clara Simmons',
      gender: 'Female',
      dateOfBirth: '2003-07-12',
      courses: ['Design', 'Art', 'History'],
    },
    {
      id: 'S1030',
      fullName: 'Daniel Grant',
      gender: 'Male',
      dateOfBirth: '2002-10-08',
      courses: ['Finance', 'Economics', 'Statistics'],
    },
  ];

  constructor(private router: Router, private loginService: LoginService) {}

  deleteStudent(studentToDelete: any) {
    // Omit deletion if not loged in
    if(!this.loginService.isLoggedIn()) return;
    
    this.students = this.students.filter(
      (student) => student.id !== studentToDelete.id
    );
  }

  // Todo: For some of the logic create service where you will implement the loginc
  // ex. login

  
}
