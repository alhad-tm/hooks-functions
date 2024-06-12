import React, { useState, useEffect } from "react";

const Interval = () => {
  const [count, setCount] = useState(0);

  // Set up interval to increment count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle manual increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="w-full h-60 bg-blue-500 flex items-center justify-center text-3xl text-white">
        I will count from {count} to 100
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment Count
        </button>
      </div>
    </div>
  );
};

export default Interval;
