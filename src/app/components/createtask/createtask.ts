import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Taskservice } from '../../services/taskservice';

@Component({
  selector: 'app-createtask',
  standalone: false,
  templateUrl: './createtask.html',
  styleUrl: './createtask.css',
})
export class Createtask {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder,private taskservice: Taskservice) {
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
          console.log('task created')
        },
        error :(err) =>{
          console.log('An error occured',err)
        }
        
      })
    }
  }
}
