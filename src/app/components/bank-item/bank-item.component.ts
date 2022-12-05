import { Component, OnInit,Input } from '@angular/core';

import {Bank} from '../../Bank'

@Component({
  selector: 'app-bank-item',
  templateUrl: './bank-item.component.html',
  styleUrls: ['./bank-item.component.css']
})
export class BankItemComponent implements OnInit {

  constructor() { }
  @Input('inputBank') bank!:Bank
  ngOnInit(): void {
    console.log('init');
    console.log(this.bank);
  }

}
