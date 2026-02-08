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

      {/* ===== HERO TEXT SECTION ===== */}
      <div className="min-h-screen bg-blue-50 flex items-start pt-8 md:pt-14">

        <div className="px-4 sm:px-10 md:px-24 w-full">
          <div className="max-w-4xl mx-auto">

            <span className="
              text-sm
              md:text-base
              lg:text-lg
              xl:text-xl
              2xl:text-2xl
              font-semibold
              text-blue-800
              tracking-wide
            ">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              2xl:text-9xl
              font-extrabold
              text-gray-900
              leading-tight
            ">
              Civic Safety
              <span className="block text-blue-900">
                Starts With Us
              </span>
            </h1>

            <p className="
              mt-6
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              xl:text-3xl
              2xl:text-4xl
              text-gray-700
              leading-relaxed
            ">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="#contact"
                className="
                  px-10
                  py-4
                  text-base
                  md:text-lg
                  lg:text-xl
                  xl:text-2xl
                  2xl:text-3xl
                  bg-blue-900
                  text-white
                  rounded-lg
                  hover:bg-blue-800
                  transition
                "
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="
                  px-10
                  py-4
                  text-base
                  md:text-lg
                  lg:text-xl
                  xl:text-2xl
                  2xl:text-3xl
                  border
                  border-blue-900
                  text-blue-900
                  rounded-lg
                  hover:bg-blue-100
                  transition
                "
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ===== IMAGE SLIDER SECTION ===== */}
      <div className="relative w-full">

        <img
          src={images[current]}
          alt="Civic responsibility activity"
          className="
            w-full
            h-[260px]
            sm:h-[340px]
            md:h-[460px]
            lg:h-[560px]
            xl:h-[680px]
            2xl:h-[800px]
            object-cover
          "
        />

        <button
          onClick={prevImage}
          className="
            absolute
            top-1/2
            left-6
            -translate-y-1/2
            bg-black/50
            text-white
            px-5
            py-4
            rounded-full
            hover:bg-black/70
            transition
          "
        >
          ❮
        </button>

        <button
          onClick={nextImage}
          className="
            absolute
            top-1/2
            right-6
            -translate-y-1/2
            bg-black/50
            text-white
            px-5
            py-4
            rounded-full
            hover:bg-black/70
            transition
          "
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default LandingSection;
