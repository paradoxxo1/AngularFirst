import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  providers: [DatePipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  updateForm: FormGroup = new FormGroup({});
  employees: Employee[] = [];
  isUpdateFormActive: boolean = false;
  updateIndex: number = 0;

  constructor(private _date: DatePipe) {}

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startingDate: new FormControl(this._date.transform(new Date(), 'yyyy-MM-dd')),
      profession: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startingDate: new FormControl(this._date.transform(new Date(), 'yyyy-MM-dd')),
      profession: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  save() {
    if (this.addForm.valid) {
      const formValue = this.addForm.value;

      const newEmployee: Employee = {
        name: formValue.name,
        profession: formValue.profession,
        startingDate: formValue.startingDate
      };

      this.employees.push(newEmployee);
      this.createAddForm();
    }
  }

  get(model: Employee, index: number) {
    this.createUpdateForm();
    this.updateForm.controls['name'].setValue(model.name);
    this.updateForm.controls['profession'].setValue(model.profession);
    this.updateForm.controls['startingDate'].setValue(model.startingDate);
    this.isUpdateFormActive = true;
    this.updateIndex = index;
  }

  cancel() {
    this.isUpdateFormActive = false;
  }

  update() {
    if (this.updateForm.valid) {
      const updatedEmployee: Employee = {
        name: this.updateForm.value.name,
        profession: this.updateForm.value.profession,
        startingDate: this.updateForm.value.startingDate
      };

      this.employees[this.updateIndex] = updatedEmployee;
      this.cancel();
    }
  }
}

class Employee {
  name: string = '';
  profession: string = '';
  startingDate: string = '';
}
