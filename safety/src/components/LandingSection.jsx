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
    <section id="home" className="w-full bg-white overflow-hidden">
      <Navbar />

      {/* ===== TEXT SECTION (NO FORCE HEIGHT) ===== */}
      <div className="bg-blue-50">

        <div
          className="
            px-4
            sm:px-6
            md:px-16
            lg:px-24
            pt-6
            md:pt-10
            pb-6     /* ✅ controlled spacing */
          "
        >
          <div className="max-w-4xl">

            <span className="block text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-blue-800 tracking-wide">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="
              mt-3
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              text-gray-900
              leading-tight
            ">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
              text-gray-700
              leading-relaxed
              max-w-3xl
            ">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            <div className="mt-5 flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="
                  px-10 py-3
                  text-sm md:text-base lg:text-lg xl:text-xl
                  bg-blue-900 text-white rounded-md
                  hover:bg-blue-800 transition
                "
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="
                  px-10 py-3
                  text-sm md:text-base lg:text-lg xl:text-xl
                  border border-blue-900 text-blue-900 rounded-md
                  hover:bg-blue-100 transition
                "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== IMAGE SLIDER ===== */}
      <div className="relative w-full">

        <img
          src={images[current]}
          alt="Civic responsibility activity"
          className="
            w-full
            h-[220px]
            sm:h-[280px]
            md:h-[380px]
            lg:h-[480px]
            xl:h-[580px]
            object-cover
          "
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full"
        >
          ❯
        </button>

      </div>
    </section>
  );
}

export default LandingSection;
