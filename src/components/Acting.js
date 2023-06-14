import React from "react";
import { acting } from "../data";

export default function Acting() {
  return (
    <section id="acting" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <span role="img" aria-label="clapperboard" className="text-5xl">
              🎬
            </span>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Acting Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Chris Jones has appeared in many productions, both live and on-film. Details of a few of his performances can be found in this section.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {acting.map((acting) => (
            <a
              href={acting.link}
              key={acting.image} target="_blank" rel="noopener noreferrer"
              className="sm:w-1/3 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="Poster for production including Chris Jones"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={acting.image}
                />
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {acting.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-2">
                  Role: {acting.role}
                  </h2>
                  <br/>
                  <p className="leading-relaxed font-medium text-gray-400">Description: {acting.description}</p>
                  <br/>
                  <p className="tracking-widest text-sm title-font font-medium text-gray mb-2">{acting.year}</p>

                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}