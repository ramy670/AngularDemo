import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/bankService';
import { Bank } from 'src/app/Bank';


@Component({
  selector: 'app-general-search',
  templateUrl: './general-search.component.html',
  styleUrls: ['./general-search.component.css']
})
export class GeneralSearchComponent implements OnInit {

  name: string = "";
  state: string = "";
  country: string = "";

  banks!: Bank[];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {

  }

  onSubmitBicSearch() {
    //this.eventSrchBic.emit(this.bic); 
    this.getByGenInfo(this.name, this.state, this.country);
  }

  getByGenInfo(name: string, state: string, country: string) {
    this.bankService.getBanksByGenInfo(this.name, this.state, this.country).subscribe((banksImpo) => {
      if(banksImpo.length==0)
        alert("No results")
      if (banksImpo instanceof Array) {
        this.banks = (banksImpo);

      } else {
        if (this.banks instanceof Array) {
          this.banks.splice(0);

        } else {
          this.banks = [];
        }
        this.banks[0] = (banksImpo);

      }
    });
 
  }
}
