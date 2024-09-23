import React, { useState } from "react";
import { books } from "../data";

export default function Books() {

  const [expandedBooks, setExpandedBooks] = useState({});

  // Function to toggle a specific book's expanded state
  const handleToggle = (title) => {
    setExpandedBooks((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <section id="books">
      <div className="container px-5 py-20 mx-auto text-center">
        <span role="img" aria-label="book" className="text-5xl">
          📖
        </span>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Books
        </h1>
        <div className="flex flex-wrap -m-4">
          {books.map((book) => {
            const isExpanded = expandedBooks[book.title] || false;
            
            return (
            <div className="p-4 md:w-1/2 w-full" key={book.title}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded flex flex-col">
                <div className="flex justify-center mb-4">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img
                    alt={`cover of ${book.title}`}
                    src={book.image}
                    className="w-56 h-84 object-cover object-center"
                  />
                  </a>
                </div>
                <div className="text-center">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <p className="leading-relaxed mb-6 text-xl text-blue-500 font-bold underline">{book.title}</p>
                  </a>
                  <span className="title-font font-medium text-white">
                    {isExpanded ? book.synopsis : `${book.synopsis.substring(0, 286)}...`}
                  </span>
                  <div className="mt-2">
                  <button className="text-blue-500 mt-2" onClick={() => handleToggle(book.title)}>
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}