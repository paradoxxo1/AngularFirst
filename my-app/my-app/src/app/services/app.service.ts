import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) { }

  get(callback: (res:any)=> void ) {
    return this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
      next: (res) => {
        console.log(res);
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    })
  }
  add(model: any, callback: (res:any)=> void) {
   this._http.post("https://jsonplaceholder.typicode.com/todos", model).subscribe({
    next: (res:any)=>{
      callback(res);
    },
    error:(err:HttpErrorResponse)=>{
      this._err.errorHandler(err);
    }
   });
  }
}
