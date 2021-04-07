import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WeatherDialog } from './http/dialog.component';
import { ErrorService } from './http/error.service';
import { WeatherService } from './weather/weather.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private ngUnsubscribe = new Subject();

  constructor(private weatherService: WeatherService, public dialog: MatDialog, private errorService: ErrorService) {
    this.initializeErrors();
    weatherService.getWeatherData();
  }


  openDialog(error: string[]) {
    const dialogRef = this.dialog.open(WeatherDialog, {
      data: {error}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  private initializeErrors()
  {
    this.errorService.getErrors()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((errors) => {
        this.openDialog(errors)
      });
  }

  ngOnDestroy()
  {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }
}

