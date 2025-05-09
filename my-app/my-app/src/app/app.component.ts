// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  template: `


  `
})
export class AppComponent {
  constructor(private _app: AppService

  ) {
    _app.get((res) => {
      console.log(res);

    })
  }
  save() {
    this._app.add({ userId: 1, title: "deneme", completed: false, id: 0 }, (res) => {
      console.log(res);
    })
  }
}

//Get İsteği Örnek Kullanımı
// {
//   this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
//     next: (res: any) => {
//       console.log(res);
//     },
//     error: (err: HttpErrorResponse) =>{
//       console.log(err);
//     },
//     complete: () =>{
//     }
//   });
// }

//Post İsteği Örnek Kullanımı
// save(){
//   this._http.post("https://jsonplaceholder.typicode.com/todos",this.model).subscribe(res=>{
//     console.log(res)
//   })
// }

//Optipns ile Get İsteği Örnek Kullanımı
// let header = {
//   headers:{
//     "authorization": "deger"
//   }
// }
// this._http.get("https://jsonplaceholder.typicode.com/todos/1", header).subscribe(res=>{
//   console.log(res);
// })
// }