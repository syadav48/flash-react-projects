import React, { useState, useEffect, useCallback, useRef } from 'react';

// Basic throttle function (can be extracted to a utility file)
const throttle = (func, delay) => {
  let lastExecTime = useRef(0); // Use useRef to persist across re-renders
  let timerId = useRef(null); // To clear any pending timeouts

  return useCallback((...args) => {
    const currentTime = Date.now();

    // If there's a pending execution from a previous throttle call, clear it
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    if (currentTime - lastExecTime.current >= delay) {
      func(...args);
      lastExecTime.current = currentTime;
    } else {
      // If not enough time has passed, schedule an execution after the delay
      // to ensure the function runs at the end of the rapid events
      timerId.current = setTimeout(() => {
        func(...args);
        lastExecTime.current = Date.now(); // Update after this scheduled run
        timerId.current = null; // Clear the timer ID
      }, delay - (currentTime - lastExecTime.current));
    }
  }, [func, delay]); // Recreate throttled function if func or delay changes
};

function ScrollDetector() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    // This could be an API call for infinite scroll,
    // or a complex DOM manipulation for an animation.
    setScrollPosition(window.scrollY);
    console.log('Scrolled to:', window.scrollY);
  }, []); // useCallback memoizes the function

  // Apply throttling using our custom throttle hook
  const throttledScrollHandler = throttle(handleScroll, 500); // Execute at most once every 200ms

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [throttledScrollHandler]); // Dependency array: re-run effect if throttledScrollHandler changes

  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <h1>Scroll Down to See Throttling in Action</h1>
      <p>Current Scroll Position: {scrollPosition}px</p>
      <div style={{ marginTop: '1000px' }}>
        <p>Keep scrolling...</p>
      </div>
    </div>
  );
}

export default ScrollDetector;

//We use useRef for lastExecTime and timerId because we want these values to persist across re-renders without causing the component to re-render when they change.
//useCallback is used to memoize handleScroll and the throttle function's returned function. This prevents them from being re-created on every render, which would break the throttling logic (as lastExecTime would reset).
//The throttle function now includes a setTimeout to ensure the function does run at the end of a rapid burst of events if it was initially ignored due to being within the delay. This is a common and often desired behavior for throttling.