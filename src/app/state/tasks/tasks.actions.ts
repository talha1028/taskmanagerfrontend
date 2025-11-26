import { createAction, props } from "@ngrx/store";
import { Task } from "../../models/task.model";

// Load tasks
export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTasksSuccess = createAction('[Tasks] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Tasks] Load Tasks Failure', props<{ error: string }>());

// Update task
export const updateTask = createAction('[Tasks] Update Task', props<{ task: Task }>());

// Create task
export const createTask = createAction('[Tasks] Create Task', props<{ task: Task }>());
export const createTaskSuccess = createAction('[Tasks] Create Task Success', props<{ task: Task }>());
export const createTaskFailure = createAction('[Tasks] Create Task Failure', props<{ error: string }>());
