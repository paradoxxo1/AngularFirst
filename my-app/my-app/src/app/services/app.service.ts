import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient
  ) { }

  get (){
   return this._http.get("https://jsonplaceholder.typicode.com/todos/1")
  }
  add(model: any) {
    return this._http.post("https://jsonplaceholder.typicode.com/todos",model);
  }
}
