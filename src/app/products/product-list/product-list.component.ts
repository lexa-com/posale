import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct='';
  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
   
  }

}
  
