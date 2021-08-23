import React from "react";
import imageLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = ({ height, margin }) => {
  return (
    <div className="Logo" style={{ height: height, marginBottom: margin }}>
      <img src={imageLogo} alt="Burger Logo" />
    </div>
  );
};

export default Logo;
