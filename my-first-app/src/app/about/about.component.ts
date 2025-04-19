import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-about",
    standalone: true,
    templateUrl : "./about.component.html",
    styleUrl : "./about.component.css",
    imports : [], //dış kaynakları import etme methodu
    providers : [], //serviceleri dahil etmek için kullanılır
    encapsulation : ViewEncapsulation.None // html ciktilarindaki propertyleri yonetmemizi sagliyor.
})
export class AboutComponent {

}