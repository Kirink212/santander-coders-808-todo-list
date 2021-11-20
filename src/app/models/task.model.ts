export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
};

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  labels: string[];
  done: boolean;
};
