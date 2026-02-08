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

      {/* ===== TEXT SECTION : FULL SCREEN ===== */}
      {/* ===== TEXT SECTION ===== */}
<div className="bg-blue-50 flex items-start pt-6 md:pt-12 pb-10 md:pb-16">

  <div className="px-4 sm:px-10 md:px-24 w-full">
    <div className="max-w-3xl mx-auto">


            <span className="
              text-xs
              sm:text-sm
              lg:text-base
              xl:text-lg
              font-semibold
              text-blue-800
              tracking-wide
            ">
              CIVIC SAFETY & SOCIAL RESPONSIBILITY
            </span>

            <h1 className="
              mt-4
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
            ">
              A safe society is built when citizens and authorities work together
              with responsibility and trust. Active social work and mutual help
              create disciplined communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="
                  px-7
                  py-3
                  text-sm
                  md:text-base
                  lg:text-lg
                  xl:text-xl
                  bg-blue-900
                  text-white
                  rounded-md
                  hover:bg-blue-800
                  transition
                "
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="
                  px-7
                  py-3
                  text-sm
                  md:text-base
                  lg:text-lg
                  xl:text-xl
                  border
                  border-blue-900
                  text-blue-900
                  rounded-md
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

      {/* ===== IMAGE SLIDER : NEXT SCREEN ===== */}
      <div className="relative w-full">

        <img
          src={images[current]}
          alt="Civic responsibility activity"
          className="
            w-full
            h-[240px]
            sm:h-[300px]
            md:h-[420px]
            lg:h-[520px]
            xl:h-[620px]
            object-cover
          "
        />

        <button
          onClick={prevImage}
          className="
            absolute
            top-1/2
            left-4
            -translate-y-1/2
            bg-black/50
            text-white
            px-4
            py-3
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
            right-4
            -translate-y-1/2
            bg-black/50
            text-white
            px-4
            py-3
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
