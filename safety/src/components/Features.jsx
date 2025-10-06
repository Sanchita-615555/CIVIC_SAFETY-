//  Features Section //
function Features() {
  return (
    <section id="features" className="min-h-screen bg-[url('/features.jpg')] bg-gray-50 flex flex-col justify-center px-6 py-8">
      {/* Headings */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Keeping Our Community Safe</h1>
        <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">Our Features</h4>
      </div>

      {/* Features Container */}
      <div className="flex justify-center items-stretch gap-4 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-green-200 shadow-md rounded-xl p-4 flex-1 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
          <h2 className="font-bold text-base mb-1">Report Issues</h2>
          <p className="text-blue-900 text-xs">
            Report potholes, streetlight outages, or hazards in your area quickly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-green-200 shadow-md rounded-xl p-4 flex-1 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
          <h2 className="font-bold text-base mb-1">Live Alerts</h2>
          <p className="text-blue-900 text-xs">
            Get real-time alerts on emergencies, traffic, and community updates.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-200 shadow-md rounded-xl p-4 flex-1 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
          <h2 className="font-bold text-base mb-1">Community Engagement</h2>
          <p className="text-blue-900 text-xs">
            Collaborate with local authorities and citizens to solve problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;