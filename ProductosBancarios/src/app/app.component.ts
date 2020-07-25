import { Component } from '@angular/core';
import { BankServiceService } from "./bank-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public bankServiceService : BankServiceService) { }
 
}
