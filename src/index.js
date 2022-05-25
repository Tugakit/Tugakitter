import React, { Profiler } from "react";
import { StrictMode } from "react";
import './Style/header.css' //Je sais pas pourquoi mais en fait il faut importer le css du header pour le voir :/ 
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Header from "./Components/Header/";
import "./Style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  </Router>
);
