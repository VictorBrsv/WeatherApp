import Weather from "./components/Weather";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [currentCity, setCurrentCity] = useState("Moscow");
  return (
    <>
      <div className='bg-indigo-100'>
        <Header setCurrentCity={setCurrentCity} />
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <Weather currentCity={currentCity} />
        </div>
      </div>
    </>
  );
}

export default App;
