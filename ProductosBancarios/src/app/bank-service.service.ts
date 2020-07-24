import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  status : boolean = false;
  constructor() { }
  public toogle(){
    this.status= !this.status;
  }
}
