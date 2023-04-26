import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {
  detailsData = {};

  ngOnInit(): void {
    this.detailsData = history.state.data
    console.log('TESTE', this.detailsData)
  }
}
