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

      {/* ===== TEXT SECTION (FULL SCREEN, TOP ALIGNED) ===== */}
      <div className="min-h-screen bg-blue-50 flex items-start pt-4 md:pt-10">

        <div className="px-4 md:px-24 w-full">
          <div className="max-w-2xl mx-auto">

            <span className="text-xs font-semibold text-blue-800 tracking-wide">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            <div className="mt-3 flex gap-3">
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
      </div>

      {/* ===== IMAGE SLIDER (NEXT SCREEN) ===== */}
      <div className="relative w-full">

        <img
          src={images[current]}
          alt="Civic responsibility activity"
          className="
            w-full
            h-[220px]
            sm:h-[260px]
            md:h-[360px]
            lg:h-[440px]
            xl:h-[500px]
            object-cover
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

    </section>
  );
}

export default LandingSection;
