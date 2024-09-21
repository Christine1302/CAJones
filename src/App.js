import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Acting from "./components/Acting";
import Drumming from "./components/Drumming";
import Books from "./components/Books";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Drumming />
      <Acting />
      <Books />
      <Contact />
      <p className="mt-4 text-sm text-gray-500">Website created by Christine Jones, using FreeCodeCamp tutorial as reference</p>
    </main>
  );
}