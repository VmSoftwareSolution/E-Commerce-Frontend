import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SlideMenuComponent } from "../../components/slide-menu/slide-menu.component";

@Component({
  selector: 'app-products-list',
  imports: [
    NavbarComponent,
    NavbarComponent,
    SlideMenuComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
