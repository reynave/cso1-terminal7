import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  constructor() { }

  stringfix(txt: any, l: number = 0, pos: string = '') {
    let data = txt.toString();
    let len = data.length;
    let space = "";
    if (len < l) {
      for (var i = 0; i < l - len; i++) {
        space += " ";
      }
    }
    if (pos == 'f') {
      data = space + data;
    } else {
      data = data + space;
    }

    return data;
  }
  numberFormat(price: number) {
    let data = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").toString().replace(".00", "");
    return data;
  }
  

  template(bill : any){
    let items = bill['items'];
    let summary = bill['summary'];
    
    let message = "\n\n";
    console.log(items);
    console.log("123456789-123456789-123456789-123456789-12345678"+"\n");
    message += bill['template']['companyName']+"\n";
    message += bill['template']['companyAddress']+"\n";
    message += bill['template']['companyPhone']+"\n"; 
    message += "────────────────────────────────────────────────"+"\n";
    items.forEach((el: any) => {
      message += el['itemId'] + " " + el['shortDesc'] + "\n";
      message +=
        this.stringfix(el['qty'], 4) + " X " +
        this.stringfix(this.numberFormat(el['price']), 10, 'f') + " " +
        ( el['totalDiscount'] > 0 ?  this.stringfix("(DISC "+this.numberFormat(el['totalDiscount'])+")",14,'f')+")" : "")  + this.stringfix(" ",14,'f') +   
       // this.stringfix("(DISC 23,000)", 14) + 
        this.stringfix(this.numberFormat(el['totalPrice']), 10, 'f') +
        "\n"; 
    });
    message += "================================================"+"\n"; 
    message += "\n"; 
    message += "SUBTOTAL              :"+this.stringfix(this.numberFormat(summary['total']), 24, 'f')+"\n";  
    message += "DISCOUNT              :"+this.stringfix(this.numberFormat(summary['discount']), 24, 'f')+"\n";  
    message += "DISCOUNT MEMBER       :"+this.stringfix(this.numberFormat(summary['discountMember']), 24, 'f')+"\n";  
    message += "VOUCHER               :"+this.stringfix(this.numberFormat(summary['voucher']), 24, 'f')+"\n";  
    message += "TOTAL (SETELAH PAJAK) :"+this.stringfix(this.numberFormat(summary['final']), 24, 'f')+"\n";  
 //console.log("123456789-123456789-123456789-123456789-12345678"+"\n");
    message += "\n";  
    message += "        BKP         PPN         DPP     NON BKP"+"\n";
              //          0           0           0           0
    message +=  this.stringfix(this.numberFormat(summary['bkp']), 11, 'f')+" "+
    this.stringfix(this.numberFormat(summary['ppn']), 11, 'f')+" "+
    this.stringfix(this.numberFormat(summary['dpp']), 11, 'f')+" "+
    this.stringfix(this.numberFormat(summary['nonBkp']), 11, 'f'); 
    message += "\n\n";  
    message += "BILL                  : "+bill['id']+ "\n"; 
    message += "DATE                  : "+bill['date']+ "\n";    
    message += "UNIT / OUTLET ID      : "+bill['detail']['terminalId']+ "/"+ bill['detail']['storeOutlesId'] +" \n";  
    
    message += "\n";  
    message += bill['template']['footer'].replace("<br>","\n")+"\n\n\n\n"; 
    console.log(message);
    return message;
  }
}
