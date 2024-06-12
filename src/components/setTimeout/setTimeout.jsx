import React from "react";
import { useState, useEffect } from "react";

const SetTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timingInterval = setInterval(() => {
      setCount((count) => {
        
        if (count>=49) {
 clearInterval(timingInterval);
 return count
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
        I will count from {count} to 50
      </div>
    </div>
  );
};

export default SetTime;
