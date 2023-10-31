import React from 'react';

interface WeatherDetailProps {
  label: string;
  value: string;
  ariaLabel: string;
}

const WeatherDetail = ({ label, value, ariaLabel }: WeatherDetailProps) => {
  return (
    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
      <div className="text-2xl">
        <h3>{label}</h3>
        <h3 className="text-white bg-black/25 rounded-xl mt-1" aria-label={ariaLabel}>
          {value}
        </h3>
      </div>
    </div>
  );
};

export default WeatherDetail;
