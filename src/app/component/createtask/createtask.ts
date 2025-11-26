import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Taskservice } from '../../services/tasks/taskservice';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-createtask',
  standalone: false,
  templateUrl: './createtask.html',
  styleUrl: './createtask.css',
})
export class Createtask {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder,private taskservice: Taskservice,private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['medium',Validators.required],
      status: ['pending',Validators.required],
      dueDate: ['',Validators.required]
    })
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData= this.taskForm.value;
      this.taskservice.createtask(taskData).subscribe({
        next :(data)=>{
          console.log('task created');
          this.router.navigate(['/home'])
        },
        error :(err) =>{
          console.log('An error occured',err)
        }
        
      })
    }
  }
}
