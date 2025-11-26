import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import * as TaskActions from '../../state/tasks/tasks.actions';
import { selectAllTasks } from '../../state/tasks/tasks.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  standalone: false
})
export class TaskList {
  tasks$!: Observable<Task[]>;          // just declare, don't assign
  filteredTasks$!: Observable<Task[]>;  // just declare, don't assign
  selectedStatus: string = 'all';
  selectedPriority: string = 'all';

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    // Assign tasks$ here AFTER store is initialized
    this.tasks$ = this.store.select(selectAllTasks);

    // Dispatch loadTasks action
    this.store.dispatch(TaskActions.loadTasks());

    // You can initialize filteredTasks$ here as well if needed
    this.updateFilteredTasks();
  }

  onStatusChange(value: string) {
    this.selectedStatus = value;
    this.updateFilteredTasks();
  }

  onPriorityChange(value: string) {
    this.selectedPriority = value;
    this.updateFilteredTasks();
  }

  updateFilteredTasks() {
    this.filteredTasks$ = this.tasks$.pipe(
      map(tasks =>
        tasks.filter(task =>
          (this.selectedStatus === 'all' || task.status === this.selectedStatus) &&
          (this.selectedPriority === 'all' || task.priority === this.selectedPriority)
        )
      )
    );
  }

  onTaskStatusChanged(updatedTask: Task) {
    this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
  }

  gotoaddTask() {
    this.router.navigate(['createtask']);
  }
}
