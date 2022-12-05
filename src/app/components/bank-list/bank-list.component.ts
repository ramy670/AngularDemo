import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BankService } from 'src/app/bankService';

import {Bank} from '../../Bank'

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  constructor(private bankService: BankService) { }
  banks!:Bank[];
  @Input()  banksResults!: Bank[]; 

  ngOnInit(): void {
    //this.bankService.getBanks().subscribe((banksImpo) => this.banks = banksImpo);
    console.log(Date.now());

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(Date.now());

    console.log(changes);
    console.log(this.banksResults);
    this.banks=this.banksResults;
}
  /*
  getByBic(bic:string){
    this.bankService.getBanks().subscribe((banksImpo) => this.banks = banksImpo);
  }
  */
}
