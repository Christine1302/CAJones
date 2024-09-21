import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
// import Logo from "C:/Users/twini/Downloads/CAJONES/src/components/logo.jpg";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavToSection = (section) => {

    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element){
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img className="h-10 w-10 rounded-full mr-2" src="./logo.jpg" alt="CAJones Drum Logo" onClick={() => handleNavToSection("about")} />

        <span className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer ml-3 text-xl"
          onClick={() =>handleNavToSection("about")}>
            CA Jones
          </span>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <span onClick={() => handleNavToSection("drumming")} className="mr-5 hover:text-white cursor-pointer">
            Drumming
          </span>
          <span onClick={() => handleNavToSection("acting")} className="mr-5 hover:text-white cursor-pointer">
            Acting
          </span>
          <span onClick={() => handleNavToSection("books")} className="mr-5 hover:text-white cursor-pointer">
            Books
          </span>
          <RouterLink to="gallery" className="mr-5 hover:text-white cursor-pointer">
            Gallery
          </RouterLink>
        </nav>

        <span onClick={() => handleNavToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact CA Jones
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </span>
      </div>
    </header>
  );
}
