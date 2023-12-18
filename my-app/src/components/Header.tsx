import React from "react";
import GlobalSvgSelector from "../assets/items/global/GlobalSvgSelector";
import Select from "react-select";

interface HeaderProps {
  setCurrentCity: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentCity }) => {
  const cities = [
    { value: "Moscow", label: "Moscow" },
    { value: "Buenos Aires", label: "Buenos Aires" },
    { value: "New York", label: "New York" },
    { value: "Berlin", label: "Berlin" },
    { value: "Paris", label: "Paris" },
    { value: "London", label: "London" },
  ];

  const handleCityChange = (cities: any) => {
    setCurrentCity(cities.value);
  };

  return (
    <header className='header flex items-center justify-between w-full mb-30 border-b-2 border-solid border-black bg-indigo-200 shadow-md'>
      <div className='wrapper flex items-center'>
        <div className='logo mr-20 cursor-pointer'>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className='title text-uppercase font-bold text-3xl text-primary'>
          Weather App
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='w-48'>
          <Select options={cities} onChange={handleCityChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
