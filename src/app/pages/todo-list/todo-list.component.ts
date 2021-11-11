import { Component, OnInit } from '@angular/core';

import { Task, TaskPriority } from './../../models/task.model';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasksList: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tasksList = [
      {
        title: "Assistir à aula do curso Santander Coders",
        description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Low,
        labels: [],
      },
      {
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
      }
    ];
  }

}
