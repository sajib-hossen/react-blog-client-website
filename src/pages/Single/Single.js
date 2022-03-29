import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import Slidebar from "../../components/Slidebar/Slidebar";
import "./Single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Slidebar />
    </div>
  );
};

export default Single;
