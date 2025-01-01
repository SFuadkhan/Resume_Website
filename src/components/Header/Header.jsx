import React from "react";
import "./index.css"
function Header() {
  return (
    <header>
      <img src="" alt="" />
      <h2>Safarov Fuadkhan</h2>
      <h4>Frontend Developer</h4>
      <menu>
        <a
          href="https://www.linkedin.com/in/fuadkhan-safarov-029b59270/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/SFuadkhan" target="_blank">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="mailto:s.fuad019@gmail.com" target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://gitlab.com/SFuadkhan" target="_blank">
          <i className="fa-brands fa-square-gitlab"></i>
        </a>
        <a href="tel:051-445-56-54" target="_blank">
        <i className="fas fa-phone"></i>
        </a>
      </menu>
    </header>
  );
}

export default Header;
