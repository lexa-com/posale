import { Component,Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ProductDetailComponent {

  @Input() 
  name = '';

  @Output()
  bought = new EventEmitter;
  buy(){
    this.bought.emit();
  }
  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
   }

}
