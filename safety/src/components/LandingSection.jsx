import React from "react";
import Navbar from "./Navbar";

function LandingSection() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-[url('/landing.jpg')] bg-cover bg-center relative overflow-hidden"
    >
      {/* NAVBAR */}
     <div className="w-full absolute -top-3 left-1/2 -translate-x-1/2 z-50">
  <Navbar />
</div>


      {/* CONTENT (Perfectly Centered Vertically) */}
      <div
        className="w-full h-full flex flex-col justify-center items-start px-6
                   pt-10"
      >
        {/* HEADING */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 text-left">
  CIVIC SAFETY,
  <span className="block text-2xl md:text-3xl text-blue-900 italic tracking-wide 
                   text-right ml-6 md:ml-10">
    OUR PRIORITY
  </span>
</h1>


        {/* PARAGRAPH (Adjusted small + perfect fit) */}
       <p className="text-black-700 text-[11px] md:text-sm leading-relaxed 
              text-left max-w-xs md:max-w-sm">

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
