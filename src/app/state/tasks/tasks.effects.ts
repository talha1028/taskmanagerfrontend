import { Injectable, inject } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as TaskActions from './tasks.actions';
import { Taskservice } from '../../services/tasks/taskservice';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  private taskService = inject(Taskservice);

  // Load tasks effect
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks })),
          catchError(err => of(TaskActions.loadTasksFailure({ error: err.message })))
        )
      )
    )
  );

  // Create task effect
  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.createTask),
      mergeMap(action =>
        this.taskService.createtask(action.task).pipe(
          map(task => TaskActions.createTaskSuccess({ task })),
          catchError(err => of(TaskActions.createTaskFailure({ error: err.message })))
        )
      )
    )
  );
}
