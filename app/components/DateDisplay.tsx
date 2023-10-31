import React from 'react';
import { getCurrentDate } from '../utils/currentDate';

const DateDisplay = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <h1 className="text-3xl text-white">Hoy</h1>
      <p className="text-white">{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
