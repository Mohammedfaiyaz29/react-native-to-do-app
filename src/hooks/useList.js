import { useEffect, useState } from 'react';
import { getFormattedDateTime } from '../utils/date';

const useList = () => {
  
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');

  const getDate = () => {
    const { dayOnly, dayName } = getFormattedDateTime();
    setDate(dayOnly);
    setDay(dayName);
  };

  
  useEffect(() => {
    getDate();
  }, []);

  return {
    date,
    day,
   
   
  };
};

export default useList;
