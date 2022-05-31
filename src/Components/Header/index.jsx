import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-2xl font-Regular w-1/5 mb-10 ml-20 mt-4 ">
      <svg class="w-7 h-7 text-blue fill-current mb-10">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
      <Link to="/">
        <div className="IconNav highlight">
          <svg className="h-10 w-10 " viewBox="0 0 15 30" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <p className="mb-3 flex ">Home</p>
        </div>
      </Link>
      <Link to="/Explore  ">
        <p className="mb-3 ml-3 highlight">Explore </p>
      </Link>
      <Link to="/Communities">
        <p className="mb-3 ml-3 highlight">Communities </p>
      </Link>
      <Link to="/Notifications">
        <p className="mb-3 ml-3 highlight">Notifications </p>
      </Link>
      <Link to="/Messages">
        <p className="mb-3 ml-3 highlight">Messages </p>
      </Link>
      <Link to="/Profile">
        <p className="mb-3 ml-3 highlight">Profile </p>
      </Link>
      <Link to="/Settings">
        <p className="mb-3 ml-3 highlight">Settings </p>
      </Link>
    </div>
  );
}

export default Header;
