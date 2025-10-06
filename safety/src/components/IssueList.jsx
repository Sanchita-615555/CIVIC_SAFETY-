import React, { useState } from "react";       //for usestate use//
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
    <section id="issues" className="p-4 bg-blue-100 flex flex-col justify-between min-h-screen">
      {/* Heading */}
      <div>
        <h1 className="text-xl font-bold text-center mb-1">Civic Safety Issues</h1>
        <p className="text-center mb-2 text-xs">Stay updated with latest reported issues</p>
      </div>

      {/* 2x2 grid, small boxes, fits single screen */}
      <div className="grid grid-cols-2 gap-2 max-w-4xl mx-auto flex-grow">
        {currentItems.map((issue) => (
          <div
            key={issue.id}
            className="border rounded-md shadow bg-white hover:shadow-lg flex flex-col w-full h-28"
          >
            <img
              src={issue.img}
              alt={issue.title}
              className="w-full h-16 object-cover rounded-t-md"
            />
            <div className="p-1 text-center flex-grow flex flex-col justify-center">
              <h2 className="text-sm font-semibold">{issue.title}</h2>
              <p className="text-[10px] text-blue-900">{issue.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-2 py-1 text-xs rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}


export default IssueList;