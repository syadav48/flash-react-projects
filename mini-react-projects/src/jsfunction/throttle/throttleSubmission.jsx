import React, { useState, useCallback, useRef } from 'react';

// Reusable throttle hook
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

function ThrottleSubmission() {
  const [submissionCount, setSubmissionCount] = useState(0);
  const [status, setStatus] = useState('');

  const handleSubmit = useCallback(() => {
    setStatus('Submitting...');
    setSubmissionCount(prev => prev + 1);
    console.log('Form submitted!', new Date().toLocaleTimeString());

    // Simulate an API call
    setTimeout(() => {
      setStatus(`Submission successful! Count: ${submissionCount + 1}`);
    }, 1000);
  }, [submissionCount]); // Dependency on submissionCount to update status correctly

  const throttledHandleSubmit = useThrottle(handleSubmit, 2000); // Allow submission once every 2 seconds
  // 2 sec me bs ek baar execute hoga

  return (
    <div>
      <h2>Throttled Submit Button</h2>
      <p>Click the button rapidly to see throttling in action.</p>
      <button onClick={throttledHandleSubmit}>
        Submit Form (Throttled)
      </button>
      <p>Status: {status}</p>
      <p>Total Submissions (actual): {submissionCount}</p>
    </div>
  );
}

export default ThrottleSubmission;