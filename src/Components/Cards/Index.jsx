import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/">
      <div>
          <img classname="w-15 h-15 rounded-full" alt="Username avatar"></img>
        <h2 classname="username font-bolder text-base"></h2>
        <p classname="handler opacity-75 font-base text-base"></p>
      </div>
    </Link>
  );
}
