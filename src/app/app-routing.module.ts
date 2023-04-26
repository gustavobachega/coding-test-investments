import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';

const routes: Routes = [
    { path: 'investimentos', component: InvestmentListComponent },
    { path: 'detalhes/:id', component: InvestmentDetailsComponent },
    { path: '',  redirectTo: '/investimentos', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }