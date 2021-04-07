import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { WeatherComponent } from "../weather.component";
import { WeatherService } from "../weather.service";
import { WeatherListComponent } from "./weather-list.component";


describe('WeatherComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        WeatherListComponent
      ],
      providers: [WeatherService]
    }).compileComponents();
  });

  it('should create the weather-list component', () => {
        const fixture = TestBed.createComponent(WeatherListComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
  });

  it('contains mat-list element', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('mat-list')).toBeTruthy;
  });

  it('contains app-weather-city element', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-weather-city')).toBeTruthy;
  });
});
