import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Createuser } from '../../component/createuser/createuser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Createuser
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class UsermoduleModule { }
