# OpenWeatherMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Project was created using flex-layout and material angular for prepare layout. The layout is responsive. Application shows 5 cities on the cards and display temperature (converted from Kelvin to Celcius) and wind speed.  After click on "Show the weathre forecast" shows the forecast in the next hours - I set 10 next items from table weather. 
On the list are display temperature, wind speed, time and image form weather api presenting current weather status.
An interceptor handling the error service has been implemented in the application.
I apply unit tests (run by ng test)
and tests end-to-end (e2e) (run by ng e2e)
# weather-api
