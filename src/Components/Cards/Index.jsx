import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Card() {
  return (
    <Link to="/">
      <div classname="CardContainer highlight o-1 m-0 ">
        <img classname="w-15 h-15 rounded-full" alt="Username avatar"></img>
        <span classname="">
          <h2 classname="username font-bolder text-base"></h2>
          <p classname="handler opacity-75 font-base text-base"></p>
        </span>
        <p className="description font-base text-base"> </p>

        <span classname="ion"></span>
      </div>
    </Link>
  );
}

export default Card;
