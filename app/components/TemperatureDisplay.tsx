import React from 'react';

interface TemperatureDisplayProps {
  temperature: number;
}

const TemperatureDisplay = ({ temperature }: TemperatureDisplayProps) => {
  return (
    <div>
      <p className="text-5xl text-white">
        {temperature.toFixed()}
        <span>°</span>
      </p>
    </div>
  );
};

export default TemperatureDisplay;
