import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x:-30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Anshumat Foundation — Empowering careers & knowledge
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We mentor students and young professionals with resources, programs,
            and community learning to create meaningful career pathways.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#programs" className="px-5 py-2 rounded-md bg-indigo-600 text-white">Our Programs</a>
            <a href="#contact" className="px-5 py-2 rounded-md border">Get Involved</a>
          </div>
        </motion.div>

        <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }}>
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-[#071124] dark:to-[#052034] rounded-2xl p-6 shadow-lg">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop" alt="community" className="w-full rounded-lg object-cover h-64"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
