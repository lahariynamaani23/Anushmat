import React from "react";

export default function Initiatives() {
  const items = [
    { title: "Scholarships", desc: "Supporting talented students with financial aid." },
    { title: "Community Events", desc: "Monthly learning and networking events." },
    { title: "Online Courses", desc: "Free learning resources and curated materials." }
  ];
  return (
    <section id="initiatives" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Initiatives</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="p-5 border rounded-md bg-white dark:bg-[#061622]">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
