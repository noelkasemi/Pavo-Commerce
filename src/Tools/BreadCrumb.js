import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // The pathname contains the current URL
  const currentPath = location.pathname;

  return (
    <section className='mt-20 flex w-full justify-center'>
      <p> {currentPath === '/home' ? '' : 'Home/' + currentPath.charAt(1).toUpperCase() + currentPath.slice(2)}</p>
    </section>
  );
};

export default Breadcrumb;
