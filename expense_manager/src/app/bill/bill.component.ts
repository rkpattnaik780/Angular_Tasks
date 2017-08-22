import { Component, OnInit } from '@angular/core';
import { Item } from "./item" ;
import { List } from "./list" ;

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  items : Item[] = [{category : "Food" , limit : 500 ,total : 100 ,expend : 20 ,exceed : 0 ,contents : [ {name : "banana" , price : 50 }, {name : "mango" , price : 50 }]},
                    {category : "Travels" , limit : 5000 ,total : 2000, expend : 40 ,exceed : 0 ,contents : [ {name : "Puri" , price : 2000 }]},
                    {category : "Clothes" , limit : 5000 ,total : 1500, expend : 30 ,exceed : 0 ,contents : [ {name : "Jeans" , price : 1500 }]},
                    {category : "Bills" , limit : 10000 ,total : 2000, expend : 20 ,exceed : 0 ,contents : [ {name : "Groccery" , price : 2000 }]}];

  newname : string ;

  newprice : Number ; 

  newcat : string ;

  newmethod : string ;

  newCat_name : string ;

  newCat_limit : Number ;

  constructor() { } 

  ngOnInit() {
  }

  addints (num1:number, num2:number)
  {
	return (num1 + num2)
   }

  addexp(cat,name,price){
    for( var i = 0 ; i < this.items.length ; i ++){
      if( this.items[i]["category"] === cat){
          this.items[i]["contents"].push({name : name , price : price});
          this.items[i]["total"] =  this.addints(Number(this.items[i]["total"]) , Number(price));
          this.items[i]["expend"] = (Number(this.items[i]["total"]) / Number(this.items[i]["limit"])) * 100 ;
          if(this.items[i]["expend"] >= 80 && this.items[i]["expend"] <= 100){
            alert("Expenses in " + this.items[i]["category"] + " is approaching the limit.");
          }else if(this.items[i]["expend"] > 100){
          this.items[i]["exceed"] = 1 ;
          }
      }
    }
    this.newcat = "" ;
    this.newname = "" ;
    this.newprice = null ;
    this.newmethod = "" ;
  }

  addcategory(name , limit){
     this.items.push({category : name , limit : Number(limit) ,total : 0 ,expend : 0 ,exceed : 0 ,contents : []});
     this.newCat_name = "" ;
     this.newCat_limit = null ;
  }

}
