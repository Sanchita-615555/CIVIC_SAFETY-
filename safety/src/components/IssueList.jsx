import React, { useState } from "react";

function IssueList() {
  const issues = [
    { id: 1, title: "Potholes", desc: "Road potholes need repair", img: "potholes.jpg" },
    { id: 2, title: "Murders", desc: "Unsafe areas must be reported", img: "murder.jpg" },
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
      className="p-4 md:p-6 lg:p-10 bg-blue-100 flex flex-col justify-between min-h-screen"
    >
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center mb-2">
          Civic Safety Issues
        </h1>
        <p className="text-center mb-5 text-xs md:text-sm lg:text-lg xl:text-xl text-gray-700">
          Stay updated with latest reported issues
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto flex-grow">
        {currentItems.map((issue) => (
          <div
            key={issue.id}
            className="
              border
              rounded-xl
              shadow
              bg-white
              hover:shadow-2xl
              transition
              flex
              flex-col
              w-full
              h-36
              md:h-44
              lg:h-56
              xl:h-64
              2xl:h-72
            "
          >
            <img
              src={issue.img}
              alt={issue.title}
              className="
                w-full
                h-24
                md:h-28
                lg:h-36
                xl:h-40
                2xl:h-44
                object-cover
                rounded-t-xl
              "
            />

            <div className="p-3 text-center flex-grow flex flex-col justify-center">
              <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold">
                {issue.title}
              </h2>
              <p className="text-[11px] md:text-sm lg:text-base xl:text-lg text-blue-900">
                {issue.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-4 py-2
              text-sm lg:text-base
              rounded
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
