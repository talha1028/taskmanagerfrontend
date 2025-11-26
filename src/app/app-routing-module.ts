import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { TaskList } from './component/task-list/task-list';
import { Users } from './component/users/users';
import { AuthGuard } from './auth/auth-guard';
import { Createuser } from './component/createuser/createuser';
import { Home } from './component/home/home';
import { Createtask } from './component/createtask/createtask';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Createuser },
  { path: 'home', component: Home, },
  { path: 'createtask', component: Createtask,canActivate: [AuthGuard] },
  { path: 'tasklist', component: TaskList, canActivate: [AuthGuard] },
  { path: 'users', component: Users, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
