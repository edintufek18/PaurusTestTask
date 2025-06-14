import { Routes } from '@angular/router';
import { StudentOverview } from './student-overview/student-overview';
import { StudentAdd } from './student-add/student-add';
import { StudentEdit } from './student-edit/student-edit';

export const routes: Routes = [
  {
    path: 'student-overview',
    loadComponent: () =>
      import('./student-overview/student-overview').then(
        (m) => m.StudentOverview
      ),
  },
  {
    path: 'student-add',
    loadComponent: () =>
      import('./student-add/student-add').then((m) => m.StudentAdd),
  },
  {
    path: 'student-edit',
    loadComponent: () =>
      import('./student-edit/student-edit').then((m) => m.StudentEdit),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  { path: '**', redirectTo: 'student-overview' },
];
