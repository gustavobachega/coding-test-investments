import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StocksInterface } from '@interfaces/investment.interface';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})


export class ModalDialogComponent {
  errors: StocksInterface[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: StocksInterface[], public router: Router) {
    if(data.length) this.errors = data.filter(item => item.withdrawValue! > item.saldoAcumulado!)
  }

  goHome() {
    this.router.navigate(['/investimentos'])
  }
}
