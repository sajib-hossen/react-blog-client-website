import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Slidebar from "../../components/Slidebar/Slidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Slidebar />
      </div>
    </>
  );
};

export default Home;
