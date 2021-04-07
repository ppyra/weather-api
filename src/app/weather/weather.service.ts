import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Forecast} from "./models/api-models";


@Injectable({ providedIn: 'root' })
export class WeatherService {

  configUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherData() {
    const url = `${this.configUrl}/group?id=2988507,2759794,3117735,759734,2643743&appid=379fd180f241dda5e575a30bf50c4e07`;
    return this.http.get(url);

  }

  getForcecastWeather(id: number): Observable<Forecast>{
    const url = `${this.configUrl}/forecast?id=${id}&APPID=379fd180f241dda5e575a30bf50c4e07`;
    return this.http.get<Forecast>(url);
  }
}
