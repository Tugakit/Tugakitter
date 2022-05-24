import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Explore from './Pages/Explore';
import Header from './Components/Header/'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <Router>  
  <Routes>
  <Header/>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/explore">
        <Explore />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      </Routes> 
  </Router>
  , document.getElementById('root')   
);