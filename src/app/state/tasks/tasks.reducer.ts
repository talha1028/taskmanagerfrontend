import { createReducer, on } from "@ngrx/store";
import { initialTaskState } from "./task.state";
import * as TaskActions from './tasks.actions';

export const tasksReducer = createReducer(
  initialTaskState,

  // Load tasks
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Update task
  on(TaskActions.updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),

  // Create task
  on(TaskActions.createTask, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.createTaskSuccess, (state, { task }) => ({
    ...state,
    loading: false,
    tasks: [...state.tasks, task]
  })),
  on(TaskActions.createTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);