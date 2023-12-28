import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = () => {
  const [countdownTime, setCountdownTime] = useState(2 * 60 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setCountdownTime(2 * 60 * 60);
  };

  const handleTimeChange = (event) => {
    const newTime = parseInt(event.target.value, 10) * 60;
    setCountdownTime(newTime);
  };

  const formattedTime = moment.utc(countdownTime * 1000).format('HH:mm:ss');

  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className='w-80 h-64 flex flex-col gap-6 border rounded-lg  justify-center items-center m-8'>
      <h1 className='text-2xl font-bold'>Countdown Timer</h1>
      <div>
        <label>
          Set Time :{' '}
          <input type="text" className='border w-24 outline-none text-center'  value={countdownTime / 60} onChange={handleTimeChange} />
        </label>
      </div>
      <div>
        <p>Current Time: {formattedTime}</p>
      </div>
      <div className='flex gap-4'>
        <button className='border p-2 rounded-lg hover:bg-green-600 hover:text-white' onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
        <button className='border p-2 rounded-lg hover:bg-red-600 hover:text-white' onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  );
};

export default CountdownTimer;
