import React from "react";
import "./Slidebar.css";
import me from "../../images/me.png";

const Slidebar = () => {
  return (
    <div className="slidebar">
      <div className="slidebarItem">
        <span className="slidebarTitle">ABOUT ME</span>
        <img src={me} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos
          dolor natus unde dolorem reprehenderit nobis odit. Facere, ipsum,
          quam, ut soluta labore facilis voluptate mollitia praesentium nisi
          quisquam qui?
        </p>
      </div>
      <div className="slidebarItem">
        <span className="slidebarTitle">CATEGORIES</span>
        <ul className="slidebarList">
          <li className="slidebarListItem">Life</li>
          <li className="slidebarListItem">Music</li>
          <li className="slidebarListItem">Style</li>
          <li className="slidebarListItem">Sport</li>
          <li className="slidebarListItem">Tech</li>
          <li className="slidebarListItem">Photograph</li>
          <li className="slidebarListItem">Movie</li>
        </ul>
      </div>
      <div>
        <span className="slidebarTitle">FOLLOW US</span>
        <div className="slidebarSocial">
          <i className="slidebarIcon fa-brands fa-facebook-square"></i>
          <i className="slidebarIcon fa-brands fa-twitter-square"></i>
          <i className="slidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="slidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
