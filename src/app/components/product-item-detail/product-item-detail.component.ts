import { CartService } from 'src/app/services/cart.service';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Items } from '../../models/Items';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

 @Input() detailedItem:any
id:any

  constructor(  private ActivatedRoute:ActivatedRoute,private DataService:DataService, private CartService:CartService) {
    this.detailedItem ={
      id : 0,
      name : '',
      price : 0,
      url : '',
      description:'',
      quantity: 1 ,
      total:0
    }
   }

  ngOnInit(): void {
    this.id=this.ActivatedRoute.snapshot.paramMap.get('id');
    this.DataService.getDataDetail(this.id).subscribe(res=>{
      this.detailedItem=res;

    });
  }
  addtoCart(): void {
    this.CartService.addCartItems(this.detailedItem)
      alert('Added to cart');
    }
}
