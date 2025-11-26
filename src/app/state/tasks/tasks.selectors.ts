import { createFeatureSelector,createSelector } from "@ngrx/store";
import { TaskState } from "./task.state";

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
    selectTaskState,
    (state) => state.tasks
)