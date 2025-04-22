import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  addForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createAddForm();

    this.addForm.controls["email"].setValue("aa@gmail.com");
  }

  createAddForm() {
    this.addForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(8)])
    });
  }

  add() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.addForm.reset();
    }
  }
}
