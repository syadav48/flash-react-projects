import React, { useState, useEffect, useCallback, useRef } from 'react';

// Reusing the useThrottle hook from the previous example
const useThrottle = (callback, delay) => {
  const lastExecTime = useRef(0);
  const timerId = useRef(null);

  return useCallback((...args) => {
    const currentTime = Date.now();

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    if (currentTime - lastExecTime.current >= delay) {
      callback(...args);
      lastExecTime.current = currentTime;
    } else {
      timerId.current = setTimeout(() => {
        callback(...args);
        lastExecTime.current = Date.now();
        timerId.current = null;
      }, delay - (currentTime - lastExecTime.current));
    }
  }, [callback, delay]);
};

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    console.log(`Mouse moved to: X=${event.clientX}, Y=${event.clientY}`);
  }, []);

  const throttledMouseMoveHandler = useThrottle(handleMouseMove, 50); // Update mouse position at most every 50ms

  useEffect(() => {
    window.addEventListener('mousemove', throttledMouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMoveHandler);
    };
  }, [throttledMouseMoveHandler]);

  return (
    <div style={{ height: '400px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Throttled Mouse Tracker</h2>
      <p>Move your mouse over this area.</p>
      <p>Mouse X: {mousePosition.x}, Mouse Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseTracker;