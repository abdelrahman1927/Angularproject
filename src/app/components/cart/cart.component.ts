import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Items } from '../../models/Items';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   cartItems:Items[]=[]

  name: string ='';
  address: string ='';
  cartID: string ='';
totalCost:any =0;




  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.CartService.getCartItems();

this.totalCartCost();

  }

  removeItems(data:Items){
    if (data.quantity==0){
    this.cartItems = this.cartItems.filter(d=> d.id !==data.id)

    alert('Your cart item has been removed')
    }

  }
  totalCartCost() {
    this.totalCost = this.CartService.totalcartPrice();

  }
  submitOrder(){

  this.CartService.sendName(this.name)
  this.CartService.sendTotal(this.totalCost)
  }
}
