import { Routes } from '@angular/router';
import { Overview } from './overview/overview';
import { StudentAdd } from './student-add/student-add';
import { StudentEdit } from './student-edit/student-edit';

export const routes: Routes = [
  {
    path: 'overview',
    loadComponent: () => import('./overview/overview').then((m) => m.Overview),
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
  { path: '**', redirectTo: 'login' },
];
