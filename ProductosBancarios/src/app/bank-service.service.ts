import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  products: any = [];
  load = false;
  status: boolean = false;
  constructor(private http: HttpClient) {
    http.get("../../assets/json/data.json")
      .subscribe(resp => {
        this.products = resp;
        this.load = true;

        this.products.forEach(function (value) {
          if (value.typeAccount == "DEPOSIT_ACCOUNT") {
            if (value.productAccountBalances.saldo_disponible.amount < value.productAccountBalances.saldo_actual.amount) {
              let wallet = value.productAccountBalances.saldo_actual.amount - value.productAccountBalances.saldo_disponible.amount;
              value.productAccountBalances.wallet = wallet;
            }
          }else if (value.typeAccount == "CREDIT_CARD") {
            let subString = value.accountInformation.accountIdentifier.toString()
            let idCard = subString.substr(0, 1);
            let idMasked = subString.substr(12, 16);
            value.accountInformation.accountIdentifier = idMasked;
            if (parseInt(idCard) == 4) {
              value.accountInformation.type = "v";
            }else if (parseInt(idCard) == 5) {
              value.accountInformation.type = "m";
            }
          }
        });

        var newArray = []
        var arrayTemp = []
        for (var i = 0; i < this.products.length; i++) {
          arrayTemp = newArray.filter(resp => resp["name"] == this.products[i]["typeAccount"])
          if (arrayTemp.length > 0) {
            newArray[newArray.indexOf(arrayTemp[0])]["value"].push(this.products[i])
          } else {
            newArray.push({ "name": this.products[i]["typeAccount"], "value": [this.products[i]] })
          }
        }
        this.products = newArray;
        console.log(newArray);

      });
  }
  
  public toogle() {
    this.status = !this.status;
  }

  
}
