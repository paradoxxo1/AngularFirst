import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld : string= "Hello World form Adana!"

  pClassName: string = "blue";

  clickMe(){
    alert("Clicking ME")
  }

  changeMe(event : any){
    this.helloWorld = event.target.value;
  }
}
