import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { MatSidenav, MatButtonBase } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('drawer')
  sidenav: MatSidenav;

  @ViewChild('burger')
  burger: MatButtonBase;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  handleClose(): void {
    this.isHandset$
      .pipe(first())
      .subscribe(
        isHandset => {
          if (isHandset) {
            this.sidenav.close();
            this.burger._elementRef.nativeElement.blur();
          }
        }
      );
  }
}
