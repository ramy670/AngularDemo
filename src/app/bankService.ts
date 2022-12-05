import { Injectable } from '@angular/core';

import { Bank } from './Bank';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Accept': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BankService {


  private apiUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }
  /*
    getBanks(): Observable<Bank[]> {
      return this.http.get<Bank[]>(this.apiUrl);
    }
  */
  getBanksByBic(bic: string): Observable<Bank[]> {
    const queryUrl = this.apiUrl.concat("getBank/?bic=", bic)
    console.log(queryUrl);

    return this.http.get<Bank[]>(queryUrl);
  }

  addBank(bank: Bank): Observable<Bank> {
    const queryUrl = this.apiUrl.concat("addBank/")
    console.log(queryUrl);
    console.log(bank);

    return this.http.post<Bank>(queryUrl, bank, httpOptions);
  }

  getBanksByGenInfo(name: string, state: string, country: string) {
    let attAddedYet = false;
    let queryUrl = this.apiUrl.concat("searchBank/?");
    if (name != "") {
      queryUrl = queryUrl.concat("name=", name);
      attAddedYet = true;
    }
    if (state != "") {
      if (attAddedYet)
        queryUrl = queryUrl.concat("&");

      queryUrl = queryUrl.concat("state=", state);
      attAddedYet = true;
    }
    if (country != "") {
      if (attAddedYet)
        queryUrl = queryUrl.concat("&");

      queryUrl = queryUrl.concat("country=", country);
      attAddedYet = true;
    }
    console.log(queryUrl);

    return this.http.get<Bank[]>(queryUrl);

  }
}



