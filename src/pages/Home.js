import React from "react";
import { Link } from "react-router-dom";

import pageStyle from "../style/page.module.css";
import homeStyle from "../style/Home.module.css";

const Home = () => {
  return (
    <div className={`${pageStyle.page} ${pageStyle.homePage}`}>
      <div className={homeStyle.linkGroup}>
        <Link to={"employees"} className={homeStyle.link}>
          {" "}
          Employees
        </Link>
        <Link to={"tasks"} className={homeStyle.link}>
          Tasks
        </Link>
      </div>
    </div>
  );
};

export default Home;
