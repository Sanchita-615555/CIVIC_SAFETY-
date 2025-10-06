// About Section //
function AboutCivicSafety() {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center bg-amber-100 p-6 text-gray-800">
      {/* Container for all sections */}
      <div className="w-full max-w-6xl flex flex-col space-y-16">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Ensuring Civic Well-being</h1>
          <p className="text-lg text-gray-600 mt-2">
            Working Together for a Safer Community
          </p>
        </div>

        {/* Who We Are*/}
        <div className="flex flex-row items-center gap-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-blue-900">
              Civic Safety is dedicated to ensuring the well-being of our community.
              We provide guidance and support to prevent accidents, respond to emergencies,
              and promote safety awareness for everyone.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="/img1.jpg"
              alt="Who We Are"
              className="rounded-xl shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Our Mission*/}
        <div className="flex flex-row items-center gap-8">
          <div className="w-1/2 flex justify-center">
            <img
              src="/img2.jpg"
              alt="Our Mission"
              className="rounded-xl shadow-md w-full max-w-sm object-cover"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <ul className="text-blue-900 list-disc pl-5 space-y-2">
              <li>Raise awareness about civic safety hazards</li>
              <li>Promote safe practices at home, workplace, and public spaces</li>
              <li>Empower citizens with knowledge for emergency situations</li>
            </ul>
          </div>
        </div>

        {/* Our Vision - Text Left, Image Right */}
        <div className="flex flex-row items-center gap-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-blue-900">
              To create a community where every individual feels safe, informed,
              and empowered to prevent accidents and handle emergencies effectively.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="/img3.jpg"
              alt="Our Vision"
              className="rounded-xl shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Why It Matters - Image Left, Text Right */}
        <div className="flex flex-row items-center gap-8">
          <div className="w-1/2 flex justify-center">
            <img
              src="/img4.jpg"
              alt="Why It Matters"
              className="rounded-xl shadow-md w-full max-w-sm object-cover"/>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <ul className="text-blue-900 list-disc pl-5 space-y-2">
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