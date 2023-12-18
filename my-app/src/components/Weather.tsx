import { useState, useEffect } from "react";
import getWeatherData from "../data/getWeatherData";
import { WeatherDataType } from "../types/types";
import Badge, { Item } from "./Badge";

interface WeatherProps {
  currentCity: string;
}

const Weather: React.FC<WeatherProps> = ({ currentCity }) => {
  const [weatherData, setWeatherData] = useState<null | WeatherDataType>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(currentCity);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentCity]);

  if (!weatherData) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    );
  }

  const temp = weatherData.main.temp;
  const pressure = weatherData.main.pressure;
  const humidity = weatherData.main.humidity;
  const wind = weatherData.wind.speed;

  const items = [
    { iconId: "temp", name: "Температура", value: temp, description: "°C" },
    {
      iconId: "pressure",
      name: "Давление",
      value: pressure,
      description: "мм ртутного столба",
    },
    {
      iconId: "precipitation",
      name: "Влажность",
      value: humidity,
      description: "%",
    },
    { iconId: "wind", name: "Ветер", value: wind, description: "м/с" },
  ];

  return (
    <>
      {weatherData && (
        <div className='items-center border-solid border-black border-solid border-2 p-5 rounded-lg bg-indigo-200 shadow-md w-500'>
          <h1 className='title justify-center text-uppercase font-bold text-3xl text-primary'>
            {currentCity}
          </h1>
          <div className='text-2xl'>
            <div className='dayInfoItems grid grid-cols-2 gap-4 '>
              {items.map((item: Item) => (
                <Badge key={item.iconId} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
