import React from "react";
import { IndicatorSvgSelector } from "../assets/indicators/IndicatorSvgSelector";

interface Props {
  item: Item;
}

export interface Item {
  iconId: string;
  name: string;
  value: number | string;
  description: string;
}

const Badge = ({ item }: Props) => {
  const { iconId, name, value, description } = item;
  return (
    <div className='item relative flex items-center mb-25 border-solid border-2 rounded-lg p-4 bg-indigo-100 shadow-md'>
      <div className='indicator w-38 h-38 flex items-center justify-center bg-white shadow-md rounded-full'>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className='item relative flex items-center mb-25 rounded-lg p-4 '>
        <div className='indicatorName mr-20 text-14 text-base-color '>
          {name}
        </div>
        <div className='indicatorValue mr-20 text-14 text-text-color-default '>
          {value} {description}
        </div>
      </div>
    </div>
  );
};

export default Badge;
