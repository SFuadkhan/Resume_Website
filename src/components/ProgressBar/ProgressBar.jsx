import React, { useState, useEffect } from "react";
import "./index.css";
import { usePagingContext } from "../../context/PagingContext";

function ProgressBar({ children }) {
  const { page } = usePagingContext();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth * 0.8); 
    };

    
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="progress_container">
        <div
          className="progress_div"
          style={{
            width: `${(width * page) / 4}px`,
          }}
        >
          <i className="fa-solid fa-meteor"></i>
        </div>
      </div>
      {children}
    </>
  );
}

export default ProgressBar;
