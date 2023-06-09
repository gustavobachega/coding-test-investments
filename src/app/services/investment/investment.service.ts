import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '@commons/endpoints/endpoints.utils';
import { InvestmentsInterface } from '@interfaces/investment.interface';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) {}

  public getInvestments(): Observable<any> {
    const endpoint = `${endpoints.investiments}`;

    return this.http.get<InvestmentsInterface>(endpoint);
  }
}
