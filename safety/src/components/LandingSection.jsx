import React, { useState } from "react";
import Navbar from "./Navbar";

function LandingSection() {

  //Image list//
  const images = [
    "/1st.jpg",
    "/2nd.png",
    "/3rd.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="home" className="w-full bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="pt-2 md:pt-12 bg-blue-50">

        {/* TEXT PART */}
        <div className="px-6 md:px-24 pb-4">
          <div className="max-w-2xl mx-auto">

            <span className="text-xs font-semibold text-blue-800 tracking-wide">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <a
                href="#contact"
                className="px-5 py-2 text-sm bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="px-5 py-2 text-sm border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>

        {/* 🔹 IMAGE SLIDER */}
        <div className="relative w-full">

          <img
            src={images[current]}
            alt="Civic responsibility activity"
            className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2
                       bg-black/50 text-white px-3 py-2 rounded-full
                       hover:bg-black/70 transition"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2
                       bg-black/50 text-white px-3 py-2 rounded-full
                       hover:bg-black/70 transition"
          >
            ❯
          </button>

        </div>

      </div>
    </section>
  );
}

export default LandingSection;
