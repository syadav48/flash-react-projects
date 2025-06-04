
//Throttling: Executes the function at a maximum rate (e.g., "run at most once every 200ms"). It guarantees a consistent execution interval.
//Throttling helps by ensuring that your function runs at a controlled rate,
// a function is called at most once within a specified time interval, regardless of how many times the event triggering it occurs
// ex: a button is clicked 10 times within a sec, its not possible to trigger a event for every click that's why we use throttling to called 
// at most once within a specified time interval only one time in 1000 ms, like scrolling, resizing or anyother event

import { useEffect } from "react";
const Throttle = () => {
  const expensiveFunction = () => {
    console.log("Expensive Function");
  };
  const throttle = (fn, limit) => {
    let flag = true;
    return function () {
      if (flag) {
        let context = this;
        let args = arguments;
        fn(context, args);
        flag = false;
        setTimeout(() => {
          flag = true;
        }, limit);
      }
    };
  };
  const optimizefunction = throttle(expensiveFunction, 2000);
  useEffect(() => {
    window.addEventListener("resize", optimizefunction);
    return () => {
      window.removeEventListener("resize", optimizefunction);
    };
  }, [optimizefunction]);
  return <div style={{ marginTop: "-50px" }}>Throttling in my way</div>;
};

export default Throttle;
