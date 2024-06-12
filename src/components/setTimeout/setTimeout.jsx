// set interval
// count from 0 to 49

// timingInterval for 0 to 50
// ulInterval for 5 to ....(not set limit)
import React from "react";
import { useState, useEffect } from "react";

const SetTime = () => {
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(5);

  useEffect(() => {
    const ulinterval = setInterval(() => {
      setCounting((counting) => counting + 5);
    }, 1000);

    return () => clearInterval(ulinterval);
  }, []);

  useEffect(() => {
    const timingInterval = setInterval(() => {
      setCount((count) => {
        if (count >= 49) {
          clearInterval(timingInterval);
          return count;
        }
        return count + 1;
      });
    }, 100);
    // Cleanup function to clear the interval
    return () => clearInterval(timingInterval);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <div className="w-full h-60 bg-blue-500 flex items-center justify-center text-3xl text-white">
        I will count from {count} to 50 <br />I will count from {counting} to
        150
      </div>
    </div>
  );
};

export default SetTime;
