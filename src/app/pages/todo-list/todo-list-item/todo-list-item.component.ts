import { Component, Input, OnInit } from '@angular/core';

import { Task } from './../../../models/task.model';

@Component({
  selector: 'pages-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('taskObj') task?: Task;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    switch(this.task?.priority) {
      case "Low":
        return "#f5e769";
      case "Medium":
        return "#f5b869";
      case "High":
        return "#f56969";
      default:
        return "white";
    }
  }

  getClass(): string {
    switch(this.task?.priority) {
      case "Low":
        return "bg-yellow";
      case "Medium":
        return "bg-orange";
      case "High":
        return "bg-red";
      default:
        return "";
    }
  }

}
