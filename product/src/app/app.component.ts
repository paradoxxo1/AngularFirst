import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  template: `
  <h1>App Component</h1>
  <app-product title="Deneme"></app-product>
  `
})
export class AppComponent {
}
