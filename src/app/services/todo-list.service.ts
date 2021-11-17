import { Injectable } from '@angular/core';

import { TaskPriority } from './../models/task.model';

@Injectable()
export class TodoListService {

  constructor() {
    console.log("Serviço todo-list instanciado!");
  }

  getTasks() {
    return [
      {
        title: "Assistir à aula do curso Santander Coders",
        description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Medium,
        labels: [],
        done: false,
      },
      {
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
        done: false,
      }
    ];
  }
}
