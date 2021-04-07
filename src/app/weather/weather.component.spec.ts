import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { WeatherComponent } from "./weather.component";
import { WeatherService } from "./weather.service";

describe('WeatherComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        WeatherComponent
      ],
    }).compileComponents();
  });

  it('should create the weather component', () => {
        const fixture = TestBed.createComponent(WeatherComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
  });

  it('contains app-weather-list element', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-weather-list')).toBeTruthy;
  });
});
