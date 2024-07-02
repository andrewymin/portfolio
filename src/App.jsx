import React from "react";
// import Nav from './components/Nav';
import Home from "./components/Home";
// import Work from './components/Work';
import Project from "./components/Project";
// import About from './components/About';
import Contact from "./components/Contact";
// import Social from './components/Social';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import CursorTrail from './components/CursorTrail';

function App(props) {
  return (
    <BrowserRouter>
      {/* <Home />
      <Project />
      <Contact />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
