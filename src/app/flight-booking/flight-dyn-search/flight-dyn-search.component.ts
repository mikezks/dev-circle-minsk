import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-dyn-search',
  templateUrl: './flight-dyn-search.component.html',
  styleUrls: ['./flight-dyn-search.component.scss']
})
export class FlightDynSearchComponent implements OnInit {
  dynFilter = new FormGroup({});
  flights: Flight[] = [];
  formMetadata = [
    {
      name: 'from',
      label: 'Airport oif depature',
      initValue: 'Graz'
    },
    {
      name: 'via',
      label: 'Transfer airport',
      initValue: 'Vienna'
    },
    {
      name: 'to',
      label: 'Airport of destination',
      initValue: 'Hamburg'
    }
  ];

  constructor(private flightSerive: FlightService) { }

  ngOnInit() {
    for (const item of this.formMetadata) {
      this.dynFilter.addControl(
        item.name,
        new FormControl(
          item.initValue,
          // Validators
        )
      );
    }
  }

  search(): void {
    this.flightSerive
      .find(
        this.dynFilter.controls[
          this.formMetadata[0].name
        ].value,
        this.dynFilter.controls[
          this.formMetadata[2].name
        ].value
      )
      .subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
        },
        errResp => console.error('Error loading flights', errResp)
      );
  }

}
