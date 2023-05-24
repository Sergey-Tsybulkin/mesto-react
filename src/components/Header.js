import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header center">
      <img className="header__logo" src={logo} alt="Логотип сайта Место" />
    </header>
  );
}

export default Header;
