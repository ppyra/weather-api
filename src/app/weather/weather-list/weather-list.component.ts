import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/api-models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  cityWeatherList: Weather[];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((weatherList) => {
      this.cityWeatherList = weatherList['list'];
    });
  }

}
