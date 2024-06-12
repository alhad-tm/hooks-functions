// import React from "react";
// import { useState, useEffect } from "react";

// const Timer = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[count]);

//   return (
//     <div>
//       <div className="w-full h-60 bg-blue-500 flex items-center justify-center text-3xl text-white">
//         i will count from {count} to 100
//       </div>
//     </div>
//   );
// };

// export default Timer;

// import React from 'react';
// import { useState, useEffect } from 'react';

// const Timer = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       <div className='w-full h-60 bg-blue-500 flex items-center justify-center text-3xl text-white'>
//         I will count from {count} to 100
//       </div>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// };

// export default Timer;

import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      // Start incrementing every second after the initial delay
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);

      // Clear the interval if the component unmounts
      return () => clearInterval(interval);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the initial timeout if the component unmounts
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div>
      <div className="w-full h-60 bg-blue-500 flex items-center justify-center text-3xl text-white">
        I will count from {count} to 100
      </div>
    </div>
  );
};

export default Timer;
