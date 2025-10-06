import React from "react";
import Navbar from "./Navbar";            //use for navbar in landing page//

function LandingSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[url('/landing.jpg')] bg-cover bg-center flex flex-col justify-center items-start p-3 relative">
      
      {/* Navbar imported */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-50% mt-14">
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            YOUR SAFETY,
            <span className="block ml-6 text-3xl text-blue-900 italic tracking-wide">
              OUR PRIORITY
            </span>
          </h1>

          <div className="w-full flex justify-start pl-0 -mt-5">
            <div className="w-[250.5px] h-40 p-1 flex items-center -mt-2">
              <p className="text-black-700 text-sm leading-relaxed text-left ">
                Ensuring a secure community for everyone.
                Awareness, prevention, and action together.
                Your safety, our shared responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
