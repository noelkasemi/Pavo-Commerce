// useResizeEffect.js

import { useState, useEffect } from 'react';

const useResizeEffect = (callback) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
      if (callback) {
        callback(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);

  return isMobile;
};

export default useResizeEffect;
