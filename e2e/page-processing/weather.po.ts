import { $$, browser, by, element } from "protractor";

export class WeatherPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  countCities() {
    let list = $$('app-weather-city');
    expect(list.count()).toBe(5);
  }

  countForecastNextHours() {
    browser.driver.findElements(by.css('.list-item')).
        then(function(elems) {
            expect(elems.length).toEqual(10);
        }
    );
  }

  getImg() {
    var el = $$('app-weather-city').first().element(by.css('app-weather-city mat-card img'));
    expect(el).toBeTruthy();
  }

  checkCityNameExist() {
    var el = $$('app-weather-city').first().element(by.css('app-weather-city mat-card mat-card-title'));
    expect(el.getText()).toEqual('Paris');
  }

  checkTempAndWindText() {
    var el = $$('app-weather-city').first().element(by.css('app-weather-city mat-card mat-card-content'));
    var child = el.all(by.css('p')).get(0);
    child.getText().then(function(text) {
      expect(text.length).not.toEqual(0)
    });
    var child = el.all(by.css('p')).get(1);
    child.getText().then(function(text) {
      expect(text.length).not.toEqual(0)
    });
  }

  clickForecast() {
    this.selector().button().btnForecast.click();
  }

  checkImgInList() {
    this.selector().button().btnForecast.$$('img').then(function(el) {
      expect(el).toBeTruthy();
    });
  }

  selector() {
    return {
      button: () => ({
        btnForecast: element(by.id('mat-expansion-panel-header-1'))
      })
    }
  }
}
