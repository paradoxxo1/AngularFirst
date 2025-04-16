import { Component } from '@angular/core';
import { RenklendirDirective } from './renklendir.directive';
import { RouterOutlet } from '@angular/router';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RenklendirDirective, RouterOutlet, ValidateDirective],
  template: `
  <h1>Directive</h1>
  <form>
    <input id="name" autocomplete="off" validate type="text" required minlength="3">
    <div></div>
    <button type="submit">Send</button>
  </form>
  `
})
export class AppComponent {

}
