import React from "react";
import { books } from "../data";

export default function Books() {
  return (
    <section id="books">
      <div className="container px-5 py-10 mx-auto text-center">
        <span role="img" aria-label="book" className="text-5xl">
          📖
        </span>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Books
        </h1>
        <div className="flex flex-wrap -m-4">
          {books.map((book) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex items-center">
                <div className="w-1/2">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="cover of Scion of War book written by Chris Jones"
                    src={book.image}
                    className="w-full object-cover object-center"
                  />
                  </a>
                </div>
                <div className="w-1/2 pl-4">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <p className="leading-relaxed mb-6 text-xl text-blue-500 font-bold underline">{book.title}</p>
                  </a>
                  <span className="title-font font-medium text-white">
                    {book.synopsis}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}