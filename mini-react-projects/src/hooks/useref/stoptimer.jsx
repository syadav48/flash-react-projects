import { useState, useRef, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  console.log('Timer stopped');
  
  return (
    <div>
      <p className='text-white text-5xl mt-20'>Count: {count}</p>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default TimerComponent;