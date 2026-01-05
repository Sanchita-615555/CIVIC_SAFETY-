import React from "react";

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("location", form.location.value);
    formData.append("emergencyType", form.emergencyType.value);
    formData.append("description", form.description.value);

    const fileInput = document.getElementById("fileUpload");
    if (fileInput.files[0]) {
      formData.append("file", fileInput.files[0]);
    }

    try {
      // Use deployed backend URL
      const res = await fetch(
        "https://civic-safety-2.onrender.com/api/contact",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      alert(data.message);
      form.reset();
      fileInput.value = null;
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  return (
    <section
      id="contact"
      className="h-screen w-full bg-green-200 flex flex-col items-center p-2 overflow-hidden"
    >
      {/* Page Heading */}
      <div className="mb-1 w-full flex justify-center flex-none">
        <h1 className="text-xl md:text-2xl font-bold text-center italic">
          STAY SAFE, STAY ALERT
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-6xl flex gap-3">
        {/* Left: Form + Emergency */}
        <div className="flex-1 flex flex-col gap-1">
          {/* Emergency Numbers */}
          <div className="flex justify-between gap-1 flex-none">
            <div className="flex flex-col items-center bg-blue-100 p-1 rounded flex-1 text-center text-xs">
              <span className="text-lg mb-0.5">👮‍♂</span>
              <p className="font-semibold text-sm">Police</p>
              <p className="text-xs">112</p>
            </div>
            <div className="flex flex-col items-center bg-red-100 p-1 rounded flex-1 text-center text-xs">
              <span className="text-lg mb-0.5">🔥</span>
              <p className="font-semibold text-sm">Fire</p>
              <p className="text-xs">101</p>
            </div>
            <div className="flex flex-col items-center bg-green-100 p-1 rounded flex-1 text-center text-xs">
              <span className="text-lg mb-0.5">🚑</span>
              <p className="font-semibold text-sm">Ambulance</p>
              <p className="text-xs">102</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-1 text-xs overflow-hidden"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-1 rounded-sm flex-none text-xs"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="border p-1 rounded-sm flex-none text-xs"
              required
            />
            <input
              type="text"
              name="emergencyType"
              placeholder="Type of Emergency"
              className="border p-1 rounded-sm flex-none text-xs"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              rows="1"
              className="border p-1 rounded-sm flex-none text-xs"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-0.5 rounded hover:bg-blue-700 mt-1 w-full flex-none text-sm h-6"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right: Contact + File Upload */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex-1 flex flex-col justify-center gap-1 bg-gray-100 p-2 rounded text-xs overflow-hidden">
            <h3 className="text-lg font-semibold text-center flex-none">
              Get in Touch
            </h3>
            <p className="flex items-center justify-center gap-1 flex-none text-xs">
              <span>📧</span>
              <a
                href="mailto:info@civilsafety.com"
                className="hover:underline text-blue-600"
              >
                info@civilsafety.com
              </a>
            </p>

            {/* Phone */}
            <p className="flex items-center justify-center gap-1 flex-none text-xs">
              <span>📞</span>
              <a
                href="tel:+919876543210"
                className="hover:underline text-blue-600"
              >
                +91-98765-43210
              </a>
            </p>

            {/* Location */}
            <p className="flex items-center justify-center gap-1 flex-none text-xs">
              <span>📍</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1234+Safety+St,+Kolkata,+WB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                1234 Safety St, Kolkata, WB
              </a>
            </p>

            <div className="flex justify-center gap-3 mt-1 flex-none">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook.png" alt="Facebook" className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.png" alt="Twitter" className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" alt="Instagram" className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-gray-100 rounded p-1 mt-1 flex-none">
            <h3 className="font-semibold mb-1 text-xs">Upload Image / Video</h3>
            <input
              type="file"
              id="fileUpload"
              name="file"
              accept="image/,video/"
              className="text-xs w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
