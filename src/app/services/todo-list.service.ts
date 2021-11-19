import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';

import { TaskPriority } from './../models/task.model';

@Injectable()
export class TodoListService {

  constructor(private http: HttpClient) {
    console.log("Serviço todo-list instanciado!");
  }

  getTasks() {
    // const URL = 'http://madsti.com.br:9099/todos?pageNum=0';
    // const options = {
    //   headers: {
    //     Authorization: "Basic " + btoa("admin:password")
    //   }
    // };
    // return this.http.get(URL, options);
    let obs = of([
      {
        title: "Assistir à aula do curso Santander Coders",
        description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Medium,
        labels: [],
        done: false
      },
      {
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
        done: false,
      }
    ]);

    // throw Error("Novo erro");

    return obs.pipe(delay(2000));
  }
}
