import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function RealTime() {
  const [time, setTime] = useState(dayjs().format('ddd, MMM D, YYYY HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('ddd, MMM D, YYYY HH:mm:ss'));
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div id="clock" className='w-[80%] lg:w-[55%] text-[#17243e] flex justify-end lg:justify-center items-center font-medium'>
      {time}
    </div>
  );
}

export default RealTime;
