import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoAddComponent,CommonModule],
  template: `
  <h1>Input Output Örnek</h1>
  <app-todo-add (addEvent)="add($event)"></app-todo-add>
  <hr>
  <ul>
    <li *ngFor = "let todo of todos">{{todo}}</li>
  </ul>
  `
})
export class AppComponent {
  todos: string[] = [];

  add(event: string){
    this.todos.push(event);
  }
}
