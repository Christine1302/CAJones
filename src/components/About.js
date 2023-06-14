import React from "react";
// import photo from "C:/Users/twini/Downloads/CAJONES/src/components/CAJones1.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-large text-white">
           Chris "CA" Jones
            <br/>
            <br className="hidden lg:inline-block" />Detroit-based drummer, actor, and author
          </h1>
          <p className="mb-8 leading-relaxed">
           * Current drummer for The Vig Arcadia and Funk Wagon
            <br/>
           * Available for acting opportunities
          </p>
          <div className="flex justify-center">
            <a
              href="#drumming"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-gray rounded text-lg">
              See What I Do
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 hover:text-gray rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src="./CAJones1.jpg" alt="C.A. Jones playing drums"/>
        </div>
      </div>
    </section>
  );
}