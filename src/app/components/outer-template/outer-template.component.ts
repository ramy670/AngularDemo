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
 
  }
 
}
