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
      className="min-h-screen w-full bg-green-200 px-4 md:px-10 py-10 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-8 text-center">
        STAY SAFE, STAY ALERT
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Emergency Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-center shadow">
              <p className="text-2xl">👮‍♂</p>
              <p className="font-semibold">Police</p>
              <p>112</p>
            </div>

            <div className="bg-red-100 p-4 rounded-xl text-center shadow">
              <p className="text-2xl">🔥</p>
              <p className="font-semibold">Fire</p>
              <p>101</p>
            </div>

            <div className="bg-green-100 p-4 rounded-xl text-center shadow">
              <p className="text-2xl">🚑</p>
              <p className="font-semibold">Ambulance</p>
              <p>102</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-3 rounded-lg text-sm md:text-base"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="border p-3 rounded-lg text-sm md:text-base"
              required
            />

            <input
              type="text"
              name="emergencyType"
              placeholder="Type of Emergency"
              className="border p-3 rounded-lg text-sm md:text-base"
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              rows="3"
              className="border p-3 rounded-lg text-sm md:text-base"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-base font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Contact Box */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl font-semibold">Get in Touch</h3>

            <p>
              📧{" "}
              <a href="mailto:info@civilsafety.com" className="text-blue-600">
                info@civilsafety.com
              </a>
            </p>

            <p>
              📞{" "}
              <a href="tel:+919876543210" className="text-blue-600">
                +91-98765-43210
              </a>
            </p>

            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Kolkata, West Bengal
              </a>
            </p>
           {/* Social Icons */}         
           <div className="flex gap-4 mt-2">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="/facebook.png" className="w-6 h-6 cursor-pointer" />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.png" className="w-6 h-6 cursor-pointer" />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="/instagram.png" className="w-6 h-6 cursor-pointer" />
  </a>

  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin.png" className="w-6 h-6 cursor-pointer" />
  </a>
            </div>
          </div>

          {/* Upload Box */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-3">Upload Image / Video</h3>

            <input
              type="file"
              id="fileUpload"
              name="file"
              accept="image/*,video/*"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;