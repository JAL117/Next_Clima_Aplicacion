import React from 'react';
import DayForecast from './DayForecast';

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  if (!data.forecast) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <DayForecast
          key={index}
          date={day.date}
          icon={day.day.condition.icon}
          text={day.day.condition.text}
          maxTemp={day.day.maxtemp_c}
          minTemp={day.day.mintemp_c}
        />
      ))}
    </div>
  );
};

export default WeekForecast;
