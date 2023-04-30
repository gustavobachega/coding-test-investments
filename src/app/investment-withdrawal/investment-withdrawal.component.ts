import { Component, OnInit } from '@angular/core';
import { InvestmentsInterface } from '@interfaces/investment.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-withdrawal',
  templateUrl: './investment-withdrawal.component.html',
  styleUrls: ['./investment-withdrawal.component.css']
})
export class InvestmentWithdrawalComponent implements OnInit {
  detailsData!: InvestmentsInterface;
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'valorResgate'];
  withdrawalFormControl = new FormControl('');
  totalValue: number = 0;

  constructor(public dialog: MatDialog, private titleService: Title, private router: Router) {
    this.router.events.subscribe(() => {
      let newTitle: string = this.router.url === '/investimentos' ? "Investimentos" : "Resgate | " + this.detailsData?.nome
      this.titleService.setTitle(newTitle);
  });
  }

  ngOnInit(): void {
    this.detailsData = history?.state?.data;
    console.log(this.detailsData)
    this.detailsData?.acoes.forEach(stock => stock.saldoAcumulado = this.detailsData.saldoTotal * (stock.percentual/100))
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

  goBack() {
    this.router.navigate(['/investimentos'])
  }

  openModal() {
    this.dialog.open(ModalDialogComponent, {
      data: this.detailsData.acoes,
    });
  }
}