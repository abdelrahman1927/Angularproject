import { Items } from '../../models/Items';
import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() data :any;
  @Output() cartAdding : EventEmitter<any> = new EventEmitter
  constructor(private CartService:CartService) {
    this.data ={
    id : 0,
    name : '',
    price : 0,
    url : '',
    description:'',
    quantity:1,
    total:0
  }
   }

  ngOnInit(): void {
  }
  addtoCart(): void {

this.cartAdding.emit(this.data)
    this.CartService.addCartItems(this.data)
      alert('item added to cart!');
    }



}

