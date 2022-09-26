import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Items } from '../../models/Items';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
confirmationName : string='';
confirmationTotal : any;

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.confirmationName=this.CartService.getName()
    this.confirmationTotal=this.CartService.getTotal()

  }

}
