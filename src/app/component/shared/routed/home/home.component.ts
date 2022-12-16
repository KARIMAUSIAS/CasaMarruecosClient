
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombre: string = "rafa";
  public urlimagen: string = "https://fotografias.antena3.com/clipping/cmsimages01/2017/03/17/7EF92031-EE35-44F7-8DC2-D3EF8CE477E2/95.jpg?crop=1265,711,x0,y0&width=1028&height=578&optimize=high&format=webply";
  public claseboton: string = "btn btn-warning";
  public mitamanyo: string = "90px";
  public valor: string = "";


  constructor(
    
  ) { 


  }

  ngOnInit(): void {
  }

  openModal(e: any): void {
    console.log(e);
    alert("hola mundo");
  }

  openModal2(e: any): void {
    console.log(e);
    console.log(e.data);

  }




}
