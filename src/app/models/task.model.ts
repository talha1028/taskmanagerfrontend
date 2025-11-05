export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Task {
  id?: number;           // optional because new tasks won't have an id yet
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string;      // use string (YYYY-MM-DD) to stay consistent with backend
  createdAt?: string;    // optional, if backend sends timestamps
  updatedAt?: string;
}
