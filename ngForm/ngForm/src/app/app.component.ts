import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addModel = new User();
  updateModel = new User();
  users: User[] = [];
  index:number=0;
  isUpdateFormActive:boolean=false;

  constructor(
    private _date: DatePipe
  ) {
    this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    this.updateModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd');
  }

  save(form: NgForm) {
    if (form.valid) {
      this.users.push(this.addModel)
      this.addModel = new User();
      this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    }
  }

  get(model: User, index:number){
    this.index = index;
    this.updateModel= {...model};
    this.isUpdateFormActive=true;
  }

  cancel(){
    this.isUpdateFormActive=false;
  }

  update(form:NgForm){
    if(form.valid){
      this.users[this.index]=this.updateModel;
      this.isUpdateFormActive= false;
    }
  }
}


class User {
  name: string = "";
  profession: string = "";
  startingDate: string | null = "";
}