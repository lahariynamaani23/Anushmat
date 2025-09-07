import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md dark:bg-[#071124]/80">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <a className="font-semibold text-lg" href="#home">Anshumat Foundation</a>
            <div className="text-xs text-gray-500 dark:text-gray-400">Empower through knowledge</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#initiatives" className="hover:underline">Initiatives</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="md:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
