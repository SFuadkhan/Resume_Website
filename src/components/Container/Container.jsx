import React, { useState } from 'react';
import "./index.css";
import Header from '../Header/Header';
import { usePagingContext } from '../../context/PagingContext';

function Container({ children }) {
  const [isMouseOut, setIsMouseOut] = useState(false);
  const { page } = usePagingContext();

  // Conditional class based on page value
  const containerClass = isMouseOut ? "blured" : "";

  // Add "over-hidden" class when page is 1 or 4
  const overHiddenClass = (page === 1 || page === 4) ? "over-hidden" : "";

  return (
    <div
      id="container"
      className={`${containerClass} ${overHiddenClass}`}
      onMouseEnter={() => setIsMouseOut(false)}
      onMouseLeave={() => setIsMouseOut(true)}
    >
      <Header />
      {children}
    </div>
  );
}

export default Container;
