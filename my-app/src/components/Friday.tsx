import Day from "./types";

const Friday = () => {
  const dayInfo: Day = {
    img: "sunny",
    temperature: "22°C",
    precipitation: "10%",
    humidity: "60%",
    wind: "5 km/h",
  };

  return (
    <div>
      <h2>Friday</h2>
      <p>Image: {dayInfo.img}</p>
      <p>Temperature: {dayInfo.temperature}</p>
      <p>Precipitation: {dayInfo.precipitation}</p>
      <p>Humidity: {dayInfo.humidity}</p>
      <p>Wind: {dayInfo.wind}</p>
    </div>
  );
};

export default Friday;
