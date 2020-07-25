import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any, args: string): any {
    if (args != "all") {
      var value = [];
      var arrayTemp = [];
      items.forEach(function (val, i) {
        value = val.value.filter(item => item.accountInformation.bank == args);
        if (value.length > 0) {
          let item = {
            name: val.name,
            value
          }
          arrayTemp.push(item)
        }
      });
      return arrayTemp;
    } else {
      return items;
    }

  }

}
