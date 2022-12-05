import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/Bank';
import { BankService } from 'src/app/bankService';


@Component({
  selector: 'app-outer-template',
  templateUrl: './outer-template.component.html',
  styleUrls: ['./outer-template.component.css']
})
export class OuterTemplateComponent implements OnInit {
  banks: Bank[] = [];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    //this.bankService.getBanks().subscribe((banksImpo) => {this.banks = banksImpo;  console.log(Date.now());});

  }
  /*
  addBank(bank: Bank) {
    this.bankService.addBanks(bank).subscribe();

  }
 
  getByBic(bic: string) {
    this.bankService.getBanksByBic(bic).subscribe((banksImpo) => {
      this.banks.splice(0);//emptying arr
      this.banks[0] = banksImpo;//filling with result
      console.log(this.banks);
      console.log(banksImpo);
    });
   
  }  */
}
