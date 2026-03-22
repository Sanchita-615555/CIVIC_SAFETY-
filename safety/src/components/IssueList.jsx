import React, { useState } from "react";

function IssueList() {
  const issues = [
    { id: 1, title: "Potholes", desc: "Road potholes need repair", img: "potholes.jpg" },
    { id: 2, title: "Murders", desc: "Unsafe areas", img: "murder.jpg" },
    { id: 3, title: "Garbage", desc: "Overflowing garbage bins", img: "garbage.jpg" },
    { id: 4, title: "Street Lights", desc: "Broken street lights cause", img: "streetlight.jpg" },
    { id: 5, title: "Traffic-Jam", desc: "Heavy traffic congestion", img: "traffic.jpg" },
    { id: 6, title: "Water-Leakage", desc: "Water pipelines leaking", img: "water.jpg" },
    { id: 7, title: "Dustbin", desc: "Unmanaged dustbins", img: "dustbin.jpg" },
    { id: 8, title: "Road Accident", desc: "Frequent accidents at crossings", img: "accident.avif" },
    { id: 9, title: "Flooding", desc: "Flooding in low-lying areas", img: "flood.avif" },
    { id: 10, title: "Illegal-Parking", desc: "Cars blocking main roads", img: "/illegal.avif" },
    { id: 11, title: "Littering", desc: "Public places full of litter", img: "littering.jpg" },
    { id: 12, title: "Cyber-Safety", desc: "Protect yourself online scam", img: "cyber.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = issues.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(issues.length / itemsPerPage);

  return (
    <section
      id="issues"
      className="bg-blue-100 px-6 lg:px-16 py-12 min-h-screen flex flex-col"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
          Civic Safety Issues
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mt-2">
          Stay updated with latest reported issues
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-6
        w-full max-w-[1600px] mx-auto flex-grow
      ">
        {currentItems.map((issue) => (
          <div
            key={issue.id}
            className="
              bg-white
              rounded-2xl
              shadow-lg
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
              flex flex-col overflow-hidden
            "
          >
            <img
              src={issue.img}
              alt={issue.title}
              className="w-full h-40 md:h-48 lg:h-52 xl:h-56 object-cover"
            />

            <div className="p-4 text-center flex flex-col gap-2">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {issue.title}
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-blue-900">
                {issue.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-4 py-2 rounded-md text-sm md:text-base
              ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }
            `}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default IssueList;