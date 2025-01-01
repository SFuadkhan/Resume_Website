import React, { useState, useEffect } from "react";
import "./index.css";

const BackgroundImageDynamic = ({ children }) => {
  const [bgPosition, setBgPosition] = useState("50% 50%");

  useEffect(() => {
    const handleMouseMove = (evt) => {
      const x = (evt.clientX / window.innerWidth) * 100; 
      const y = (evt.clientY / window.innerHeight) * 100; 

      setBgPosition(`${x}% ${y}%`); 
    };

    window.addEventListener("mousemove", handleMouseMove);

    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="parallax_bg_div"
      style={{
        height: "100vh", 
        backgroundImage: "url('s-l1200.png')", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgPosition, 
        transition: "background-position 0.1s ease",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageDynamic;
