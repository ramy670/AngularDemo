import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Bank } from 'src/app/Bank';
import { BankService } from 'src/app/bankService';
import { DataService } from "src/app/DataSerice";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bic-search',
  templateUrl: './bic-search.component.html',
  styleUrls: ['./bic-search.component.css']
})
export class BicSearchComponent implements OnInit {

  bic: string = "";
  //@Output() eventSrchBic:EventEmitter<string>=new EventEmitter();

  //subscription: Subscription = new Subscription;
  banks: Bank[] = [];

  constructor(private bankService: BankService/*,private data: DataService*/) { }
  //@Input('inputBanks') banks!:Bank[]

  ngOnInit(): void {
    //this.subscription = this.data.currentBanks.subscribe(updatedList => this.banks = updatedList)

  }
  /*
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    */
  onSubmitBicSearch() {
    //this.eventSrchBic.emit(this.bic); 
    if (!this.bic) {
      alert('Please type in a BIC number');
      return;
    }

    this.getByBic(this.bic);
  }

  getByBic(bic: string) {
    this.bankService.getBanksByBic(bic).subscribe((banksImpo) => {
      //this.banks.splice(0);//emptying arr
      if (banksImpo.length == 0)
        alert("No results")

      this.banks = (banksImpo);//filling with result


      //this.data.changeMessage(this.banks)
    });

  }
}
