export const getFormattedDateTime = () => {
    const now = new Date();
  
    const date = String(now.getDate()).padStart(2, '0') + '/' +
                 String(now.getMonth() + 1).padStart(2, '0') + '/' +
                 now.getFullYear();
  
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const time = `${hours}:${minutes} ${ampm}`;
  
    const dayOnly = String(now.getDate()).padStart(2, '0');

   
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[now.getDay()];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[now.getMonth()];

const year = now.getFullYear();

    return { date, time, dayOnly, dayName, year, monthName };
  };