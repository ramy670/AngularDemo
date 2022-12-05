import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bank } from './Bank';

//THIS CLAS IN NO LONGER USED
@Injectable()
export class DataService {
    banks: Bank[] = [];
    private banksSource = new BehaviorSubject<Bank[]>(this.banks);
    currentBanks = this.banksSource.asObservable();

  constructor() { }

  updateBanksList(banks: Bank[]) {
    this.banksSource.next(banks)
  }

}