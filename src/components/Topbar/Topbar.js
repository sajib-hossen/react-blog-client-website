import React from "react";
import "./Topbar.css";
import me from "../../images/me.png";

const Topbar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">White</li>
          <li className="topListItem">Log Out</li>
        </ul>
      </div>
      <div className="top-right">
        <img src={me} className="topImage" alt="" />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
