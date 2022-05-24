import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function Header(){

     return (
            <div className="header">
                 <Link to="/">Accueil</Link>
                 <Link to="/Explore">Explore</Link>
            </div>
     )
}

export default Header;