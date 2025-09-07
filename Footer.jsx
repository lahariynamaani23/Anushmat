import React from "react";

export default function Footer(){
  return (
    <footer className="py-6 bg-gray-100 dark:bg-[#03161f]">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Anshumat Foundation — Built for assignment. • Accessibility friendly • Made with ❤️
      </div>
    </footer>
  );
}
