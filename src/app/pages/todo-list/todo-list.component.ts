import { Component, OnInit } from '@angular/core';

import { TodoListService } from './../../services/todo-list.service';

import { Task } from './../../models/task.model';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService],
})
export class TodoListComponent implements OnInit {

  tasksList: Task[] = [];

  constructor(private todoListService: TodoListService) {

  }

  ngOnInit(): void {
    this.tasksList = this.todoListService.getTasks();
  }

  markTaskAsDone(obj: {id: number; value: boolean}) {
    const id = obj.id;
    const done = obj.value;

    console.log(this.tasksList[id].done);
    this.tasksList[id].done = done;
    console.log(this.tasksList[id].done);
  }

}
