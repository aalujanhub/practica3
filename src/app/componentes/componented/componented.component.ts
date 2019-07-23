import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componented',
  templateUrl: './componented.component.html',
  styleUrls: ['./componented.component.css']
})
export class ComponentedComponent implements OnInit {
 bandera:boolean;
 gente: any[];

  constructor() { 
    this.bandera=false;
    this.gente =[{nom:"juan",edad:34,pais:"BO"},
    {nom:"hugo",edad:35,pais:"USA"},
    {nom:"paco",edad:36,pais:"BO"},
    {nom:"luis",edad:37,pais:"USA"},
    {nom:"ronald",edad:38,pais:"BO"}
   ];

  }

  ngOnInit() {
  }

  getvalor(){
    this.bandera=!this.bandera;
  }

}
