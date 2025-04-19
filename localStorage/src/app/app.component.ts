import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>localStorage</h1>

  `
})
export class AppComponent {

  constructor(){
    //localStorage.setItem("token", "asdlkfhald")
    //console.log(localStorage.getItem("token"))
    localStorage.removeItem("token");
    localStorage.clear();
  }

}
