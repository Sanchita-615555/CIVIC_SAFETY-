// About Section //
function AboutCivicSafety() {
  return (
    <section
      id="about"
      className="w-full bg-amber-100 px-4 sm:px-6 md:px-12 lg:px-20 py-16 text-gray-800"
    >
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-20">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Ensuring Civic Well-being
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mt-4">
            Working Together for a Safer Community
          </p>
        </div>

        {/* Who We Are */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Who We Are
            </h2>
            <p className="text-blue-900 text-base lg:text-lg xl:text-xl leading-relaxed">
              Civic Safety is dedicated to ensuring the well-being of our community.
              We provide guidance and support to prevent accidents, respond to emergencies,
              and promote safety awareness for everyone.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img1.jpg"
              alt="Who We Are"
              className="rounded-2xl shadow-lg w-full max-w-sm lg:max-w-md xl:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img2.jpg"
              alt="Our Mission"
              className="rounded-2xl shadow-lg w-full max-w-sm lg:max-w-md xl:max-w-lg object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Our Mission
            </h2>
            <ul className="text-blue-900 text-base lg:text-lg xl:text-xl list-disc pl-6 space-y-3">
              <li>Raise awareness about civic safety hazards</li>
              <li>Promote safe practices at home, workplace, and public spaces</li>
              <li>Empower citizens with knowledge for emergency situations</li>
            </ul>
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Our Vision
            </h2>
            <p className="text-blue-900 text-base lg:text-lg xl:text-xl leading-relaxed">
              To create a community where every individual feels safe, informed,
              and empowered to prevent accidents and handle emergencies effectively.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img3.jpg"
              alt="Our Vision"
              className="rounded-2xl shadow-lg w-full max-w-sm lg:max-w-md xl:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Why It Matters */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img4.jpg"
              alt="Why It Matters"
              className="rounded-2xl shadow-lg w-full max-w-sm lg:max-w-md xl:max-w-lg object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Why It Matters
            </h2>
            <ul className="text-blue-900 text-base lg:text-lg xl:text-xl list-disc pl-6 space-y-3">
              <li>Safety is a shared responsibility</li>
              <li>Prevention saves lives and reduces damage</li>
              <li>Awareness builds resilient communities</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutCivicSafety;
