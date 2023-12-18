import axios from "axios";
import { cityCoords } from "./cityCoords";

const API_KEY = "a64d235fd9ff48051da451bb74ae274f";

const getWeatherData = async (city: string) => {
  const coords = cityCoords[city];
  if (!coords) {
    throw new Error(`No coordinates found for city "${city}"`);
  }
  try {
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeatherData;
