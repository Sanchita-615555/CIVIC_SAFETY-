// Features Section //
function Features() {
  return (
    <section
      id="features"
      className="
        min-h-screen
        bg-gradient-to-b
        from-blue-50
        to-white
        flex
        flex-col
        justify-center
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        py-16
      "
    >
      {/* Headings */}
      <div className="text-center mb-14">
        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-bold
          text-gray-900
        ">
          Keeping Our Community Safe
        </h1>

        <h4 className="
          mt-4
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          font-semibold
          text-gray-700
        ">
          Our Features
        </h4>
      </div>

      {/* Features Container */}
      <div className="
        flex
        flex-col
        md:flex-row
        justify-center
        items-stretch
        gap-8
        max-w-7xl
        mx-auto
      ">
        {/* Feature 1 */}
        <div className="
          bg-white
          border
          border-blue-100
          shadow-lg
          rounded-2xl
          p-6
          lg:p-10
          flex-1
          text-center
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
        ">
          <h2 className="
            font-bold
            text-xl
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
            mb-4
            text-blue-900
          ">
            Report Issues
          </h2>

          <p className="
            text-blue-900
            text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            leading-relaxed
          ">
            Report potholes, streetlight outages, or hazards in your area quickly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="
          bg-white
          border
          border-blue-100
          shadow-lg
          rounded-2xl
          p-6
          lg:p-10
          flex-1
          text-center
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
        ">
          <h2 className="
            font-bold
            text-xl
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
            mb-4
            text-blue-900
          ">
            Live Alerts
          </h2>

          <p className="
            text-blue-900
            text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            leading-relaxed
          ">
            Get real-time alerts on emergencies, traffic, and community updates.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="
          bg-white
          border
          border-blue-100
          shadow-lg
          rounded-2xl
          p-6
          lg:p-10
          flex-1
          text-center
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
        ">
          <h2 className="
            font-bold
            text-xl
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
            mb-4
            text-blue-900
          ">
            Community Engagement
          </h2>

          <p className="
            text-blue-900
            text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            leading-relaxed
          ">
            Collaborate with local authorities and citizens to solve problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
