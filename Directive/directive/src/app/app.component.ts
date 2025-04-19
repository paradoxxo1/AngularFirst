import { Component } from '@angular/core';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidateDirective],
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
