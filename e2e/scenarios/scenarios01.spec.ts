import { browser } from 'protractor';
import { WeatherPage } from './../page-processing/weather.po';

describe('Testing weather page', () => {

  const weatherPage = new WeatherPage();

  it('Count of results cities form api', () => {
    weatherPage.navigateTo();
    weatherPage.countCities();
  })

  it('Click forecast weather', () => {
    weatherPage.clickForecast();
  })

  it('Check image in header item', () => {
    weatherPage.getImg();
  })

  it('Check city name in header item', () => {
    weatherPage.checkCityNameExist();
  })

  it('Check temp and speed wind in item', () => {
    weatherPage.checkTempAndWindText();
  })

  it('Count of forecasts next hours', () => {
    weatherPage.countForecastNextHours();
  })

  it('Check if exist image for each item', () => {
    weatherPage.checkImgInList();
  })

  it('Click forecast weather', () => {
    weatherPage.clickForecast();
  })
})
