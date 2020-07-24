import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../bank-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bankServiceService : BankServiceService) { }

  ngOnInit(): void {
  }
  public openSideBar(){
    this.bankServiceService.toogle();
  }
}
