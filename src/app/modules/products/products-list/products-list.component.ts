import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SlideMenuComponent } from '../../../shared/components/slide-menu/slide-menu.component';

@Component({
  selector: 'app-products-list',
  imports: [
    NavbarComponent,
    SlideMenuComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
