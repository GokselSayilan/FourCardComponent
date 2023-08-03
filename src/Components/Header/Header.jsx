import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTitle">
          <h1 className="headerTitleTop">Reliable, efficient delivery</h1>
          <h1 className="headerTitleBottom">Powered by Technology</h1>
        </div>
        <p className="headerDesc">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
    </div>
  );
}

export default Header;
