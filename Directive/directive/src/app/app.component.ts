import { Component } from '@angular/core';
import { RenklendirDirective } from './renklendir.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RenklendirDirective],
  template: `
  <h1 renklendir = "green" test ="test">Directive</h1>
  `
})
export class AppComponent {
}
