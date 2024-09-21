import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import Logo from "C:/Users/twini/Downloads/CAJONES/src/components/logo.jpg";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img className="h-10 w-10 rounded-full mr-2" src="./logo.jpg" alt="CAJones Drum Logo" />
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            CA Jones
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#drumming" className="mr-5 hover:text-white">
            Drumming
          </a>
          <a href="#acting" className="mr-5 hover:text-white">
            Acting
          </a>
          <a href="#books" className="mr-5 hover:text-white">
            Books
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact CA Jones
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}