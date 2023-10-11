import Day from "./types";

const Wednesday = () => {
  const dayInfo: Day = {
    img: "sunny",
    temperature: "22°C",
    precipitation: "10%",
    humidity: "60%",
    wind: "5 km/h",
  };

  return (
    <div>
      <h2>Wednesday</h2>
      <p>{dayInfo.img}</p>
      <p>Temperature: {dayInfo.temperature}</p>
      <p>Precipitation: {dayInfo.precipitation}</p>
      <p>Humidity: {dayInfo.humidity}</p>
      <p>Wind: {dayInfo.wind}</p>
    </div>
  );
};

export default Wednesday;
