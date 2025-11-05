import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { TaskList } from './components/task-list/task-list';
import { Users } from './components/users/users';
import { AuthGuard } from './auth/auth-guard';
import { Createuser } from './components/createuser/createuser';
import { Home } from './components/home/home';
import { Createtask } from './components/createtask/createtask';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Createuser },
  { path: 'home', component: Home,canActivate: [AuthGuard] },
  { path: 'createtask', component: Createtask,canActivate: [AuthGuard] },
  { path: 'tasklist', component: TaskList, canActivate: [AuthGuard] },
  { path: 'users', component: Users, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
