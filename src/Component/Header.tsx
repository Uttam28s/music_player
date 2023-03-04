import React from "react";
import BgImage from "../asset/bg.jpg";
const Header = () => {
  return (
    <div className="border h-100">
      <img src={BgImage} alt="disk" className="h-100 w-100" />
    </div>
  );
};

export default Header;
