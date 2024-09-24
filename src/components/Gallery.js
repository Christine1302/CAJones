import React, { useEffect } from "react";
import { gallery } from "../data";

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    
    return (
        <section id="gallery" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-1- mx auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Gallery
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxes text-base">
                    Scroll to see a few clips of C.A.Jones in action
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {gallery.map((gallery) => (
                            <div key={gallery.video} className="sm:w-1/4 w-100 p-4">
                                <div className="relative group">
                                <video
                                style={{
                                    width: "400px",
                                    height: "200px",
                                    objectFit: "cover",
                                    display: "block",  // Ensures the video is treated as a block element
                                    overflow: "hidden" // Ensures no overflow of video content
                                  }}
                                src={gallery.video}
                                controls
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {gallery.band}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-white mb-2">
                                        {gallery.month}, {gallery.year}
                                    </h2>
                                </div>
                            </div>
                     </div>
                    ))}
                </div>
            </div>
        </section>
    )
}