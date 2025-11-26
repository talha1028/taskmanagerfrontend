import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-taskcard',
  standalone: false,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class Taskcard {
  @Input() task: any;
  @Output() statusChanged = new EventEmitter<Task>(); 

  toggleStatus() {
    this.task.status = this.task.status === 'completed' ? 'pending' : 'completed';
    this.statusChanged.emit(this.task); // 👈 emit event to parent
  }

  getDaysRemaining(dueDate: string) {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    if(diffTime< 0){
      return 'Due Date Passed'
    }
    else{
      return `Due in ${Math.ceil(diffTime / (1000 * 60 * 60 * 24))} days`;
    }
    
  }
}
