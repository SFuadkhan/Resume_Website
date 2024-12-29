import React, { useState, useEffect } from "react";
import "./index.css"
const BackgroundImageDynamic = ({children}) => {
  const [bgPosition, setBgPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (evt) => {
      const x = (evt.clientX / window.innerWidth) * 100;
      const y = (evt.clientY / window.innerHeight) * 100;

      setBgPosition((prev) => ({
        ...prev,
        x: `${x}%`,
        y: prev.y, // Keep the scroll effect intact
      }));
    };

    const handleScroll = () => {
      const scrollY = window.scrollY / document.documentElement.scrollHeight;
      setBgPosition((prev) => ({
        ...prev,
        y: `${scrollY * 100}%`,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="parallax_bg_div"
      style={{
        // height: "130vh", // Make the page scrollable
        backgroundImage: "url('s-l1200.png')",// Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: `${bgPosition.x} ${bgPosition.y}`,
        transition: "background-position 0.1s ease",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageDynamic;
