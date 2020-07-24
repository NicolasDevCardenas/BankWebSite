import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../bank-service.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public bankServiceService : BankServiceService) { }

  ngOnInit(): void {
  }

}
