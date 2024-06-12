// import React from 'react'
// import css from "./header.module.css"
// import { useState } from 'react'


// const Header = () => {

// const [scrolled,setScrolled]=useState(false)

// const scrollDown=()=>{
//     window.scrollY>1 ? setScrolled(true): setScrolled(false);
    
// }
// window.addEventListener("scroll", scrollDown);


//   return (
//     <div className={`${ scrolled? css.container: css.newcontainer}  p-8` }> 
//         <div className={css.logo}>
//             <span className='text-blue-700 uppercase text-2xl '>Logo</span>

//         </div>

//         <div className={css.hamburger}>
//         <span className='text-red-700 uppercase text-4xl'>menu</span>

//         </div>
      
//     </div>
//   )
// }

// export default Header



import React, { useState, useEffect } from 'react';
import css from './header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  






































  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolled ? css.container : css.newcontainer} p-8 mt-12`}>
      <div className={css.logo}>
        <span className="text-blue-700 uppercase text-2xl">Logo</span>
      </div>

      <div className={css.hamburger}>
        <span className="text-red-700 uppercase text-4xl">Menu</span>
      </div>
    </div>
  );
};

export default Header;
