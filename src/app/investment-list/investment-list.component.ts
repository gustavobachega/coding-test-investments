import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '@services/investment/investment.service';
import { InvestmentsInterface } from '@interfaces/investment.interface';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {

  investmentList!: InvestmentsInterface[];
  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];

  constructor(private investmentService: InvestmentService, private router: Router) {}

  ngOnInit(): void {
    this.investmentService.getInvestments().pipe(
      catchError(err => err)
    ).subscribe(data => this.investmentList = data?.response?.data?.listaInvestimentos);
  }

  goToDetails(data: any) {
    this.router.navigate(['/detalhes/' + data.nome], {state: {data: data}})
  }

}
