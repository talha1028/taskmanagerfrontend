import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { Taskservice } from '../../services/taskservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  standalone: false
})

export class TaskList {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedStatus: string = 'all';
  selectedPriority: string = 'all';

  constructor(private taskservice: Taskservice, private router: Router) {}

  ngOnInit() {
    this.taskservice.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.filteredTasks = data; // initial display
      },
      error: (err) => console.log('An error occurred:', err)
    });
  }

  getFilteredTasks() {
    this.filteredTasks = this.tasks.filter(t =>
      (this.selectedStatus === 'all' || t.status === this.selectedStatus) &&
      (this.selectedPriority === 'all' || t.priority === this.selectedPriority)
    );
  }
  onTaskStatusChanged(updatedTask: Task) {
  const index = this.tasks.findIndex(t => t.id === updatedTask.id);
  if (index !== -1) {
    this.tasks[index] = updatedTask;
    this.getFilteredTasks(); // refresh filtered list
  }
}
  gotoaddTask(){
    this.router.navigate(['createtask']);
  }

}
