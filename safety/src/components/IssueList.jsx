import React, { useState } from "react"; // for useState //

function IssueList() {
  const issues = [
    { id: 1, title: "Potholes", desc: "Road potholes need repair", img: "potholes.jpg" },
    { id: 2, title: "Murders", desc: "Unsafe areas must be reported", img: "murder.jpg" },
    { id: 3, title: "Garbage", desc: "Overflowing garbage bins", img: "garbage.jpg" },
    { id: 4, title: "Street Lights", desc: "Broken street lights cause issues", img: "streetlight.jpg" },
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
      className="p-4 md:p-6 bg-blue-100 flex flex-col justify-between min-h-screen"
    >
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-1">
          Civic Safety Issues
        </h1>
        <p className="text-center mb-3 text-xs md:text-sm lg:text-base text-gray-700">
          Stay updated with latest reported issues
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto flex-grow">
        {currentItems.map((issue) => (
          <div
            key={issue.id}
            className="
              border
              rounded-md
              shadow
              bg-white
              hover:shadow-lg
              flex
              flex-col
              w-full
              h-32
              md:h-36
              lg:h-44
              xl:h-48
              transition
            "
          >
            <img
              src={issue.img}
              alt={issue.title}
              className="
                w-full
                h-20
                md:h-24
                lg:h-28
                xl:h-32
                object-cover
                rounded-t-md
              "
            />

            <div className="p-2 text-center flex-grow flex flex-col justify-center">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold">
                {issue.title}
              </h2>
              <p className="text-[10px] md:text-xs lg:text-sm text-blue-900">
                {issue.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-3 py-1
              text-xs md:text-sm
              rounded
              ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
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
