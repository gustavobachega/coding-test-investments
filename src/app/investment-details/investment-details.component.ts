import { Component, OnInit } from '@angular/core';
import { InvestmentsInterface } from '@interfaces/investment.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {
  detailsData!: InvestmentsInterface;
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'valorResgate'];
  withdrawalFormControl = new FormControl('');
  totalValue: number = 0;

  ngOnInit(): void {
    this.detailsData = history.state.data
    this.detailsData.acoes.forEach(stock => stock.saldoAcumulado = this.detailsData.saldoTotal * (stock.percentual/100))
  }

  calculateTotal(value: any, stock: any) {
    let sum: number = 0;
    
    this.detailsData.acoes.forEach((item) => item.withdrawValue? sum += item.withdrawValue : 0)
    this.totalValue = sum
    
    if(value > stock.saldoAcumulado) {
      stock.hasError = true;
      return;
    }
    
    stock.hasError = false
  }

  hasError(stock: any) {
    return stock.hasError;
  }
}
