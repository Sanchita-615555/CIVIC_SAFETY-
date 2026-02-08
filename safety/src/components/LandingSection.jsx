import React, { useState } from "react";
import Navbar from "./Navbar";

function LandingSection() {

  const images = ["/1st.jpg", "/2nd.png", "/3rd.jpg"];
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="w-full bg-white">

      <Navbar />

      {/* ===== HERO SECTION : TEXT + IMAGE SAME SCREEN ===== */}
      <div className="min-h-screen bg-blue-50 flex flex-col md:flex-row items-start pt-6 md:pt-14">

        {/* ===== TEXT PART ===== */}
        <div className="px-4 md:px-24 w-full md:w-1/2">
          <div className="max-w-xl">

            <span className="text-xs md:text-sm font-semibold text-blue-800 tracking-wide">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-2 text-sm md:text-base bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="px-6 py-2 text-sm md:text-base border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>

        {/* ===== IMAGE SLIDER ===== */}
        <div className="relative w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-0">

          <img
            src={images[current]}
            alt="Civic responsibility activity"
            className="
              w-full
              h-[220px]
              sm:h-[280px]
              md:h-[380px]
              lg:h-[460px]
              object-cover
              rounded-lg
            "
          />

          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2
                       bg-black/50 text-white px-3 py-2 rounded-full
                       hover:bg-black/70 transition"
          >
            ❮
          </button>

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
