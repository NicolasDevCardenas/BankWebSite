import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../bank-service.service";
import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterargs : string = "";
  DetailProducts : any = [];
  constructor(public bankServiceService : BankServiceService , ) {
    this.filterargs ="BANCO_1";
   }

  ngOnInit(): void {
  }
  // Open The side bar
  public openSideBar(){
    this.bankServiceService.toogle();
  }
  public showDetails(bank){
    this.DetailProducts = bank;
    if (this.DetailProducts) {
      $('#modalDetails').modal({backdrop: 'static', keyboard: false})
      $("#modalDetails").modal("show");
      
    }
    
  }
  public showAll(){
    if (this.filterargs == "BANCO_1") {
      this.filterargs = "all";
    }else{
      this.filterargs ="BANCO_1";
    }
  }
}
