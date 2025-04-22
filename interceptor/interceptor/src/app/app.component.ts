import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _http: HttpClient
  ) { }


  getApi() {
    this._http.get("https://jsonplaceholdericode.com/todos/1").subscribe(res=>{
      console.log(res);
    })
  }
}

