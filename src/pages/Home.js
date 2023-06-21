import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Link to={"employees"}> Employees</Link>
      <Link to={"tasks"}>Tasks</Link>
    </div>
  );
};

export default Home;
