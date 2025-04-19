import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TrCurrencyPipe],
  template: `
  <h1>Pipe</h1>
  <h1>{{name | titlecase}}</h1>
  <h1>{{date | date:'dd.MM.yyyy HH:mm:ss'}}</h1>
  <h1>{{num | currency: 'TRY': 'symbol-narrow': '1.2-2'}}</h1>
  <h1>{{num | trCurrency : '₺' : true}}</h1>
  `
})
export class AppComponent {
  name: string = "mahmut";
  date: Date = new Date();
  num: number = 123123.12;
}
