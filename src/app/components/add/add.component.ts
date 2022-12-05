import { Component, OnInit, Output } from '@angular/core';
import { Bank } from 'src/app/Bank';
import { EventEmitter } from '@angular/core';
import { BankService } from 'src/app/bankService';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() onAddNew: EventEmitter<Bank> = new EventEmitter();
  name: string = "";
  state: string = "";
  country: string = "";
  bic: string = "";
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    if (!this.correctFields())
      return;

    if (!this.correctBic(this.bic)) {
      alert('The BIC number should either be 8 or 11 characters long');
      return;
    }

    const newBank = {
      name: this.name,
      state: this.state,
      country: this.country,
      bic: this.bic,
    }


    this.tryAddBank(newBank);
    this.name = "";
    this.state = "";
    this.country = "";
    this.bic = "";
  }

  correctBic(bic: string) {
    let correctLength = false;
    if (this.bic.length == 8) {
      correctLength = true;
    }
    if (this.bic.length == 11) {
      correctLength = true;
    }
    return correctLength;
  }

  correctFields() {
    if (!this.name || !this.country || !this.state || !this.bic) {
      alert('All fields are mandatory!');
      return false;

    }
    return true;
  }

  tryAddBank(bank: Bank) {

    //Check if BIC isdupliacte
    this.bankService.getBanksByBic(bank.bic).subscribe((reply) => {
      if (reply.length == 0) {
        this.addBank(bank);
      } else {
        console.log(reply)
        alert('BIC exists already');

      }
    })
  }
  addBank(bank: Bank) {
    this.bankService.addBank(bank).subscribe((reply) => { alert('Bank added.'); console.log(reply); });

  }
}
