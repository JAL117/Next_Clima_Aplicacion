import React from 'react';

interface WeatherIconProps {
  icon: string;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
  return (
    <div>
      <img className="w-[50px] object-cover" src={icon} alt="Weather Icon" />
    </div>
  );
};

export default WeatherIcon;
