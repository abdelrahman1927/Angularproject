import { CartService } from './../../services/cart.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/Items';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
items:Items[]=[]
  constructor(private DataService:DataService, private CartService:CartService) { }

  ngOnInit(): void {
    this.DataService.getData().subscribe(imp=>{
      for(let index=0;index<imp.length; index++){
        const post = imp[index];
        post['quantity']=1;
        post['total']=1;
      }
      this.items=imp;
    });

  }

}
