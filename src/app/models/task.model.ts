export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
};

export interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  labels: string[];
};
