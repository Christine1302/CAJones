import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { drumming } from "../data";

export default function Drumming() {
  return (
    <section id="drumming">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
        <span role="img" aria-label="drum" className="text-5xl">
              🥁
            </span>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Drumming &amp; Music
          </h1>
          <div className="flex justify-center items-center">
  <div className="w-full md:w-1/5">
    <img
      src="./CAJones.gif"
      alt="Gif of C.A. Jones drumming"
      className="mx-auto w-2/3 h-auto"
    />
  </div>
</div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-1/4 mx-auto">
            CA Jones has been a drummer since he was 8 years old. He has performed with multiple michigan-based artists over the years. He currently performs with The Vig Arcadia and Funkwagon. A more inclusive list of bands he's associated with can be found below - and some of their Spotify accounts are linked.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {drumming.map((drumming) => (
            <a
            key={drumming}
            href={drumming.href} target="_blank" rel="noopener noreferrer"
            className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className={`title-font font-medium text-white ${drumming.href ? 'underline' : ''}`}>
                  {drumming.title}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="m:text-2xl text-xl font-s title-font text-white mb-4 flex justify-center underline">
          <a href = "http://thevigarcadia.com/tour"><h1>Upcoming Shows with The Vig Arcadia</h1></a>
          </div>
          <div
          className="relative w-full"
           style={{
            position: "relative",
             width: "80%",
            margin: "0 auto",
            height: "400px",
             border: "2px solid #ccc",
             borderRadius: "8px",
             overflow: "hidden", // Ensure the overlay doesn't overflow
          }}
        >
          <iframe
            id="theVig"
            title="VigTour"
            src="https://www.thevigarcadia.com/tour"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "none", maxHeight: "400px" }} // Ensure iframe is above the overlay
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black overlay
              zIndex: 2, // Ensure overlay is above the iframe
              pointerEvents: "none", // Allow interaction with iframe through the overlay
            }}
          />
        </div>
      </div>
          </section>
  )
}