import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { usePagingContext } from "../../context/PagingContext";
import Arrow from "../Arrow/Arrow";

function ControllerComponents({ children }) {
  const { goToPrevPage, goToNextPage, page, setPage } = usePagingContext();

  useEffect(() => {
    console.log(page);
  }, [goToNextPage, goToPrevPage, page]);

  const handlePageChange = (e) => {
    const pageValue = parseInt(e.target.parentElement.dataset.page);
    console.log("page_value",pageValue);
    setPage(pageValue);
  };

  return (
    <>
      {children}
      <div id="controllers_container">
        <menu id="controllers_icons">
          <NavLink
            className="link"
            data-page={1}
            onClick={handlePageChange}
            to="/home"
          >
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink
            className="link"
            data-page={2}
            onClick={handlePageChange}
            to="/about"
          >
            <i className="fa-solid fa-address-card"></i>
          </NavLink>
          <NavLink
            className="link"
            data-page={3}
            onClick={handlePageChange}
            to="/experience"
          >
            <i className="fa-solid fa-flask"></i>
          </NavLink>
          <NavLink
            className="link"
            data-page={4}
            onClick={handlePageChange}
            to="/contact"
          >
            <i className="fa-solid fa-address-book"></i>
          </NavLink>
        </menu>
        <menu id="controllers_arrows">
          <Arrow onClick={goToNextPage}></Arrow>
          <Arrow className="reversed" onClick={goToPrevPage}></Arrow>
        </menu>
      </div>
    </>
  );
}

export default ControllerComponents;
