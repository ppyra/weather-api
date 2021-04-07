import { Observable, of } from "rxjs";
import { Forecast } from "../../models/api-models";
import { DefaultForecast } from "./DefaultForecast";

export class MockService {
  public getForcecastWeather(id: number) {
    return of(DefaultForecast)
  }
}
