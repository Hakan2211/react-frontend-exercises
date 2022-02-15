import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.jpg";
import { useNavigate } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="options">
        <Link className="option" to="/work">
          Work
        </Link>
        <Link className="option" to="/food">
          Food
        </Link>
        <Link className="option" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
