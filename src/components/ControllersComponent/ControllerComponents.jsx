import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css"
import { usePagingContext } from "../../context/PagingContext";
function ControllerComponents({children}) {
    const {goToPrevPage,goToNextPage,page} = usePagingContext();
    useEffect(() => {
        console.log(goToNextPage);
        console.log(goToPrevPage);
        console.log(page);
        
    }, [])
    
  return (
   <>
    {children}
    <div id="controllers_container">
      <menu id="controllers_icons">
        <NavLink to={"/home"}><i className="fa-solid fa-house"></i></NavLink>
        <NavLink to={"/about"}><i className="fa-solid fa-address-card"></i></NavLink>
        <NavLink to={"/experience"}><i className="fa-solid fa-flask"></i></NavLink>
        <NavLink to={"/contact"}><i className="fa-solid fa-address-book"></i></NavLink>
      </menu>
      <menu id="controllers_arrows">
        <button onClick={()=>{goToNextPage()}}>&gt;</button>
        <button onClick={()=>{goToPrevPage()}}>&lt;</button>
      </menu>
    </div>
   </>
  );
}

export default ControllerComponents;
