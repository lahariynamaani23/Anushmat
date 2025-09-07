import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Initiatives from "./components/Initiatives";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Initiatives />
        <Programs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
