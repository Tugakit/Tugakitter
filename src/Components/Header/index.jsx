import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "/home/tugakit/Bureau/Github/Tugakitter/src/Components/Header/index.jsx";

function Header() {
  return (
    <div className="w-16 md:w-32 lg:w-48">
      <Link className="" to="/">Home</Link>
      <Link className="" to="/Messages">Messages</Link>
      <Link className="" to="/Notifications">Notifications</Link>
      <Link className="" to="/Profile">Profile</Link>
      <Link className="" to="/Settings">Settings</Link>
    </div>
  );
}

export default Header;
