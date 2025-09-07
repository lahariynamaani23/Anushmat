import React from "react";

export default function Mission() {
  return (
    <section id="mission" className="py-12 bg-gray-50 dark:bg-[#041022]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
          To empower individuals from underrepresented backgrounds with mentorship, career guidance, and hands-on learning that bridges the gap between education and employment.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Feature title="Mentorship" desc="One-on-one guidance from experienced mentors." />
          <Feature title="Skill Workshops" desc="Practical bootcamps to build real skills." />
          <Feature title="Placement Support" desc="Help with resume, mock interviews and job search." />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-4 rounded-md bg-white shadow-sm dark:bg-[#072033]">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
