import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightDynSearchComponent } from './flight-dyn-search/flight-dyn-search.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightDynSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FlightBookingModule { }
