import React from "react";
import Navbar from "./Navbar";

function LandingSection() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[url('/landing.jpg')] bg-cover bg-center relative overflow-hidden"
    >
      {/* NAVBAR */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* HERO CONTENT */}
      <div
        className="w-full flex flex-col justify-center items-start
                   px-4 sm:px-6 md:px-10
                   pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-10"
      >
        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          CIVIC SAFETY,
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl
                           text-blue-900 italic tracking-wide mt-1 md:mt-2">
            OUR PRIORITY
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="text-black-700 text-[12px] sm:text-sm md:text-base lg:text-lg
                      leading-relaxed text-left
                      max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg mt-2 md:mt-4">
          Ensuring a secure community for everyone.<br />
          Awareness, prevention, and action together.<br />
          Your safety, our shared responsibility.<br />
          Join hands with us to make your neighborhood<br />
          safer. Learn how to prevent issues and report<br />
          them effectively. Together, we can make a<br />
          difference in our community.
        </p>
      </div>
    </section>
  );
}

export default LandingSection;
