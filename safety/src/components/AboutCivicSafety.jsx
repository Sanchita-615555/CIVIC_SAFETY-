import React from "react";

function AboutCivicSafety() {
  return (
    <section
      id="about"
      className="w-full bg-amber-100 px-6 lg:px-16 py-20 text-gray-800"
    >
      {/* Container */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-24">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Ensuring Civic Well-being
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mt-4">
            Working Together for a Safer Community
          </p>
        </div>

        {/* SECTION BLOCK */}
        {[
          {
            title: "Who We Are",
            text: `Civic Safety is dedicated to ensuring the well-being of our community.
            We provide guidance and support to prevent accidents, respond to emergencies,
            and promote safety awareness for everyone.`,
            img: "/img1.jpg",
            reverse: false,
          },
          {
            title: "Our Mission",
            list: [
              "Raise awareness about civic safety hazards",
              "Promote safe practices at home, workplace, and public spaces",
              "Empower citizens with knowledge for emergency situations",
            ],
            img: "/img2.jpg",
            reverse: true,
          },
          {
            title: "Our Vision",
            text: `To create a community where every individual feels safe, informed,
            and empowered to prevent accidents and handle emergencies effectively.`,
            img: "/img3.jpg",
            reverse: false,
          },
          {
            title: "Why It Matters",
            list: [
              "Safety is a shared responsibility",
              "Prevention saves lives and reduces damage",
              "Awareness builds resilient communities",
            ],
            img: "/img4.jpg",
            reverse: true,
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16`}
          >
            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
                {section.title}
              </h2>

              {section.text && (
                <p className="text-blue-900 text-base lg:text-lg xl:text-xl leading-relaxed">
                  {section.text}
                </p>
              )}

              {section.list && (
                <ul className="text-blue-900 text-base lg:text-lg xl:text-xl list-disc pl-6 space-y-3">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-2xl shadow-xl 
                           w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
                           h-64 md:h-80 lg:h-[400px] xl:h-[480px]
                           object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCivicSafety;