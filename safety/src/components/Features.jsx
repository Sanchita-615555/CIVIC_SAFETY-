import React from "react";

function Features() {
  const features = [
    {
      title: "Report Issues",
      desc: "Report potholes, streetlight outages, or hazards in your area quickly.",
    },
    {
      title: "Live Alerts",
      desc: "Get real-time alerts on emergencies, traffic, and community updates.",
    },
    {
      title: "Community Engagement",
      desc: "Collaborate with local authorities and citizens to solve problems.",
    },
  ];

  return (
    <section
      id="features"
      className="
        bg-gradient-to-b
        from-yellow-300
        to-yellow-200
        px-6 lg:px-16
        py-20
      "
    >
      {/* Headings */}
      <div className="text-center mb-16">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          font-bold text-gray-900
        ">
          Keeping Our Community Safe
        </h1>

        <h4 className="
          mt-4
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          font-semibold text-gray-700
        ">
          Our Features
        </h4>
      </div>

      {/* Features Grid */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-10
        w-full max-w-[1600px] mx-auto
      ">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-white
              border border-blue-100
              shadow-xl
              rounded-2xl
              p-8 lg:p-10 xl:p-12
              text-center
              hover:shadow-2xl hover:-translate-y-3
              transition-all duration-300
            "
          >
            <h2 className="
              font-bold
              text-xl md:text-2xl lg:text-3xl xl:text-4xl
              mb-4 text-blue-900
            ">
              {item.title}
            </h2>

            <p className="
              text-blue-900
              text-sm md:text-base lg:text-lg xl:text-xl
              leading-relaxed
            ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;