import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDynSearchComponent } from './flight-dyn-search.component';

describe('FlightDynSearchComponent', () => {
  let component: FlightDynSearchComponent;
  let fixture: ComponentFixture<FlightDynSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDynSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDynSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
