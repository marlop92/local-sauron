import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from '~/app/pages/summary/transactions/transactions.component';
import { HttpClientModule } from 'node_modules/@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { SummaryRoutingModule } from '~/app/pages/summary/summary-routing.module';
import { SummaryComponent } from './summary.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    SummaryComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ]
})
export class SummaryModule {
}
