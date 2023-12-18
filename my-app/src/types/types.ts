export type CityType =
  | "Moscow"
  | "Buenos Aires"
  | "New York"
  | "Berlin"
  | "Paris"
  | "London";

export interface WeatherDataType {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: { speed: number };
}

export interface HeaderProps {
  setCurrentCity: React.Dispatch<React.SetStateAction<number>>;
}

export interface WeatherProps {
  setCurrentCity: React.Dispatch<React.SetStateAction<number>>;
}
