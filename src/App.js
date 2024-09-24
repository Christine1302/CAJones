import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Acting from "./components/Acting";
import Drumming from "./components/Drumming";
import Books from "./components/Books";
import Gallery from "./components/Gallery";
import { scroller } from "react-scroll";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const section = hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    }
  }, [hash, pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Routes>
        <Route path = "/" element={
          <React.Fragment>
            <About />
            <Drumming />
            <Acting />
            <Books />
            <Contact />
            </React.Fragment>
        } />
      <Route path = "/gallery" element={<Gallery />} />
      </Routes>
      <p className="mt-4 text-sm text-gray-500">Website created by Christine Jones, using FreeCodeCamp tutorial as reference</p>
    </main>
    </Router>
  );
}