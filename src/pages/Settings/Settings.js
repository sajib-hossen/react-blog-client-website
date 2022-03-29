import React from "react";
import Slidebar from "../../components/Slidebar/Slidebar";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settinsTitle">
          <span className="settingsUpdateTitle">Update You Account</span>
          <span className="settingsDaleteTitle">Dalete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="profilePictuer">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="settingsPPImage"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" placeholder="Sajib" />
          <label htmlFor="useEmail">Email</label>
          <input type="email" name="userEmail" placeholder="sajib@gmail.com" />
          <label htmlFor="userName">Password</label>
          <input
            type="password"
            name="userPass"
            placeholder="Enater your password"
          />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <Slidebar />
    </div>
  );
};

export default Settings;
