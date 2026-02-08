import React, { useState } from "react";
import Navbar from "./Navbar";

function LandingSection() {
  const images = ["/1st.jpg", "/2nd.png", "/3rd.jpg"];
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      id="home"
      className="
        w-full bg-white
        h-screen md:h-auto
        overflow-hidden md:overflow-visible
      "
    >
      <Navbar />

      {/* ================= TEXT SECTION ================= */}
      <div className="bg-blue-50">
        <div
          className="
            px-4 sm:px-6 md:px-16 lg:px-24
            pt-5 md:pt-12
          "
        >
          <div className="max-w-4xl">

            <span className="block text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-blue-800 tracking-wide">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="
              mt-3
              text-3xl sm:text-4xl
              md:text-5xl lg:text-6xl
              xl:text-7xl
              font-bold text-gray-900
              leading-tight
            ">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="
              mt-3
              text-sm sm:text-base
              md:text-lg lg:text-xl
              xl:text-2xl
              text-gray-700
              max-w-3xl
            ">
              A safe society is built when citizens and authorities work
              together with responsibility and trust.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="#contact"
                className="
                  px-8 py-3
                  text-sm md:text-base lg:text-lg
                  bg-blue-900 text-white
                  rounded-md
                "
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="
                  px-8 py-3
                  text-sm md:text-base lg:text-lg
                  border border-blue-900
                  text-blue-900
                  rounded-md
                "
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= IMAGE SLIDER ================= */}
      <div
        className="
          relative w-full
          mt-3 md:mt-10
          h-[180px]
          sm:h-[220px]
          md:h-[380px]
          lg:h-[480px]
          xl:h-[560px]
        "
      >
        <img
          src={images[current]}
          alt="Civic responsibility activity"
          className="w-full h-full object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default LandingSection;
