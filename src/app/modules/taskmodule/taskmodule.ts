import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // ✅ add this
import { TaskList } from '../../component/task-list/task-list';
import { Createtask } from '../../component/createtask/createtask';
import { AuthGuard } from '../../auth/auth-guard';
import { Taskcard } from '../../component/task-card/task-card';
import { HoverHighlight } from '../../directives/hover-highlight';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: TaskList, canActivate: [AuthGuard] },
  { path: 'create', component: Createtask, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    TaskList,
    Createtask,
    Taskcard,
    HoverHighlight 
  ],
  imports: [
    CommonModule,
    FormsModule,              // ✅ required for [(ngModel)]
    ReactiveFormsModule,      // ✅ required for [formGroup]
    RouterModule.forChild(routes),
  ],
   exports: [TaskList]
})
export class TaskModule { }
