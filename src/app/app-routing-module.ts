import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { TaskList } from './task-list/task-list';
import { Users } from './users/users';
import { AuthGuard } from './auth/auth-guard';
import { Createuser } from './createuser/createuser';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Createuser },
  { path: 'tasklist', component: TaskList, canActivate: [AuthGuard] },
  { path: 'users', component: Users, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // optional: catch invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
