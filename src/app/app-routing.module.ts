import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentWithdrawalComponent } from './investment-withdrawal/investment-withdrawal.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';

const routes: Routes = [
    { path: 'investimentos', component: InvestmentListComponent },
    { path: 'detalhes/:id', component: InvestmentWithdrawalComponent },
    { path: '',  redirectTo: '/investimentos', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }