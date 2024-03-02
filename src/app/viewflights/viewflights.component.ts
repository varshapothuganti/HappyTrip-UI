import { Component, OnInit } from '@angular/core';
import { viewFlights } from '../mockforviewflights';
@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.scss']
})
export class ViewflightsComponent implements OnInit {
  flights: any;
  trip: any;
  highlight1:number=-1;
  highlight2:number=-1;
  rowdet1:any;
  rowdet2:any;
  rowprice1:any=0;
  rowprice2:any=0;
  twoprice:any=0;
  constructor() {
    this.flights = viewFlights;
    this.trip = 1;
   }
   getdetails1(i1: any,row1: any): void{
    this.rowprice1=0;
    this.rowdet1=i1;
    this.rowprice1+=Number(i1.price);
    this.highlight1=row1;
    this.twoprice=this.rowprice1+this.rowprice2;
   }
   getdetails2(i2: any,row2: any): void{
    console.log(i2);
    this.rowprice2=0;
    this.rowdet2=i2;
    this.rowprice2+=Number(i2.price);
    this.highlight2=row2;
    this.twoprice=this.rowprice1+this.rowprice2;
   }
   ngOnInit(): void {
  }

}
