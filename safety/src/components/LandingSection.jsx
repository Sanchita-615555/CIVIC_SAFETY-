import React from "react";
import Navbar from "./Navbar";

function LandingSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen
                 flex flex-row items-center
                 bg-gradient-to-b from-blue-100 via-blue-50 to-white
                 relative px-6 pt-20"
    >
      {/* NAVBAR */}
      <div className="w-full absolute top-0 left-0 z-50">
        <Navbar />
      </div>

      {/* LEFT SIDE: TEXT */}
      <div className="w-1/2 flex flex-col justify-start">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          CIVIC SAFETY
        </h1>

        <h2 className="text-2xl font-semibold text-blue-900 mb-3 ml-6">
          OUR PRIORITY
        </h2>

        <p className="text-sm text-gray-700 max-w-sm leading-relaxed">
          Ensuring a secure community for everyone through awareness,
          prevention, and collective responsibility. Together we work
          towards a safer and more prepared society.
        </p>
      </div>

      {/* RIGHT SIDE: IMAGE */}
      <div className="w-1/2 flex justify-end items-start">
        <img
          src="/landing.jpg"
          alt="Civic Safety"
          className="w-60 h-50 *:**:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}                                                     

export default LandingSection;
