import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Şart Blogları</h1>
  @if(showFirst){
    <p style="color: {{showFirst  === true ? 'red' : ''}};">Birinci Yazı</p>
  }
  @if(showSecond){
    <p  style="color:  {{showSecond  === true ? 'blue' : ''}};">İkinci Yazı</p>
  }
  <hr>
  <button (click)="show(1)">Birinci Yazıyı göster</button>
  <button (click)="show(3)">İkinci Yazıyı göster</button>
  `
})

export class AppComponent {
  showFirst: boolean = false;
  showSecond: boolean = false;

  show(num: number) {
    if (num === 1) {
      this.showFirst = true;
      this.showSecond = false;
    } else {
      this.showFirst = false;
      this.showSecond = true;
    }

    switch (num) {
      case 1:
        this.showFirst = true;
        this.showSecond = false;
        break;

      case 2:
        this.showFirst = false;
        this.showSecond = true;
        break;
    }
  }
}