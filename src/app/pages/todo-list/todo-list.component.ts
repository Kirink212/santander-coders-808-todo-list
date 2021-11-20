import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TodoListService } from './../../services/todo-list.service';

import { Task } from './../../models/task.model';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService],
})
export class TodoListComponent implements OnInit, OnDestroy {
  tasksList$?: Observable<Task[]>;
  sub?: Subscription;

  constructor(private todoListService: TodoListService) {

  }

  ngOnInit(): void {
    this.tasksList$ = this.todoListService.getTasks();

    this.tasksList$?.subscribe({
      next: () => console.log("Acessei o dado!"),
      error: (error) => console.log(error),
      complete: () => console.log("Acesso finalizado!")
    }, );
    // this.sub = this.todoListService.getTasks().subscribe((tasksList: Task[]) => {
    //   this.tasksList = tasksList;
    // });

    // setTimeout(() => sub.unsubscribe(), 2100);
  }

  markTaskAsDone(obj: {id: number; value: boolean}) {
    // const id = obj.id;
    // const done = obj.value;

    // console.log(this.tasksList[id].done);
    // this.tasksList[id].done = done;
    // console.log(this.tasksList[id].done);
  }

  ngOnDestroy() {
    // this.sub?.unsubscribe();
  }
}
