import { DefaultCity } from './mock/DefaultForecast';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeatherService } from "../weather.service";
import { WeatherCityComponent } from "./weather-city.component";
import { HttpClientModule } from '@angular/common/http';
import { MockService } from './mock/mockService';



describe('WeatherCityComponent', () => {
  let component: WeatherCityComponent;
  let fixture: ComponentFixture<WeatherCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [WeatherCityComponent],
      providers: [{ provide: WeatherService, useClass: MockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityComponent);
    component = fixture.componentInstance;
    component.city = DefaultCity;
    fixture.detectChanges();
  });

  it('should create the weather-city component', () => {
    expect(component).toBeTruthy();
  });

  it('should have forecast weather list', () => {
    component.getForecast(2988507);
    expect(component.forcecast.list.length).toBeGreaterThan(0);
  });

  it('click button should call getForecast', () => {
    let button = fixture.debugElement.nativeElement.querySelector('mat-expansion-panel');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.getForecast).toHaveBeenCalled();
    });
  });
});
