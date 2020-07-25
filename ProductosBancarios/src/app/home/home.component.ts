import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../bank-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterargs : string = "";
  constructor(public bankServiceService : BankServiceService) {
    this.filterargs ="BANCO_1";
   }

  ngOnInit(): void {
  }
  // Open The side bar
  public openSideBar(){
    this.bankServiceService.toogle();
  }
  public showAll(){
    if (this.filterargs == "BANCO_1") {
      this.filterargs = "all";
    }else{
      this.filterargs ="BANCO_1";
    }
  }
}
