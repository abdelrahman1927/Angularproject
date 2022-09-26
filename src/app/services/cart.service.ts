import { Injectable } from '@angular/core';
import { Items } from '../models/Items';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsList: Items[]=[];
  total: any;
  name: string='';

  constructor() {


   }

  getCartItems() {
    return this.itemsList;
  }

  addCartItems(data:Items){
    let  index =0.6


    for(let i=0;i < this.itemsList.length; i++){
      if(this.itemsList[i].id == data.id){
        index= i;
        break;
      }else{
        index = 0.6;

      }
    }
    if(index != 0.6){
      this.itemsList[index].quantity =data.quantity;
      this.itemsList[index].total = data.total;
    }else{
this.itemsList.push(data)

  }
}



  totalcartPrice(){
     this.total=0;
    for( let x =0; this.itemsList.length>x;x++){
    this.total+=this.itemsList[x].quantity*this.itemsList[x].price;


    }



    return this.total;

  }
      sendName(name:string){

         this.name=name

                 }

       getName(){


            return this.name ;

           }

sendTotal(total:any){

  this.total=total;

  }

  getTotal(){


  return this.total ;

  }


}

