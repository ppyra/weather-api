export interface Weather {
  name?: string;
  main: MainTemp;
  wind: Wind;
  dt: number;
  id?: number;
  weather: Status[];
}

export interface Status {
  main: string;
  icon: string;
}

export interface MainTemp {
  temp: number;
}

export interface Wind {
  speed: number;
}

export interface Forecast {
  city: City;
  list: Weather[];
}

export interface City {
  id: number;
  name: string;
}


