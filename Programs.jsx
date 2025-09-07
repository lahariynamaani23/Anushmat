import React from "react";

export default function Programs(){
  const programs = [
    {title: "Bootcamp: Full Stack Basics", duration:"8 weeks", seats: 30},
    {title: "Career Accelerator", duration:"6 weeks", seats: 20},
    {title: "Mentor Match", duration:"Ongoing", seats: "Open"}
  ];
  return (
    <section id="programs" className="py-12 bg-gray-50 dark:bg-[#041022]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Programs</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <div key={idx} className="p-5 rounded-md bg-white shadow-sm dark:bg-[#062233]">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Duration: {p.duration}</p>
              <p className="mt-1 text-sm">Seats: {p.seats}</p>
              <button className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white">Register</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
