import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <style>
      .container {
        max-width: 500px;
        margin: 50px auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
      }
      h1 {
        text-align: center;
        color: #333;
      }
      div {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        padding: 8px;
        margin-bottom: 5px;
        border: 1px solid #aaa;
        border-radius: 6px;
      }
      button {
        margin-right: 10px;
        padding: 6px 12px;
        border: none;
        border-radius: 6px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
        background-color: #fff;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>

    <div class="container">
      <h1>Todo App</h1>
      @if(!isUpdateWorkFormActive ){
        <div>
        <label>Work</label>
        <input [(ngModel)]="work">
        <button (click)="save()">Save</button>
      </div>
      }@else {
        <div>
        <label>Update Work</label>
        <input [(ngModel)]="updateWork">
        <button (click)="update()">Update</button>
      </div>
      }


      <hr>

      <div>
        <ul>
          @for (data of todos; track data) {
            <li>
              {{data}}
              <span>
                @if(!isUpdateWorkFormActive){
                  <button (click)="delete($index)">Delete</button>
                  <button (click)="get($index)">Update</button>
                }
              </span>
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  work: string = "";
  updateWork: string = "";
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;

  save() {
    if (this.work.trim()) {
      this.todos.push(this.work.trim());
      this.work = "";
    }
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive =true;
  }

  update() {
    if (this.updateWork.trim()) {
      this.todos[this.updateIndex] = this.updateWork.trim();
      this.updateWork = "";
      this.isUpdateWorkFormActive =false;
    }
  }
}
