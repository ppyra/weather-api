import { Forecast } from './../models/api-models';
import { WeatherService } from './../weather.service';
import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../models/api-models';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
  @Input() city: Weather;
  forcecast: Forecast;
  panelOpenState = false;
  isLoading = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.transformData(this.city);
  }

  getForecast(id: number) {
    this.panelOpenState = true;
    this.isLoading = true;
    this.weatherService.getForcecastWeather(id).subscribe(data => {
      data.list.map(item => {
        this.transformData(item);
      });
      this.forcecast = data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

  getForecastList() {
    return this.forcecast.list !== null ? this.forcecast.list.slice(0, 10) : null;
  }

  transformData(weather: Weather) {
    weather.dt = new Date(Number(weather.dt) * 1000).getTime();
    weather.main.temp = Number.parseInt((weather.main.temp-273.15).toFixed(0));
    return weather;
  }

  getIcon(city: Weather) {
    return city.weather[0].icon;
  }

  getUrlImgWeather(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
