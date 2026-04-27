import React, { useEffect, useState } from "react";
import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalReach from "./components/GlobalReach";
import Hero, { HERO_SLIDES_COUNT } from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES_COUNT);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D1B2A] text-[#0D1B2A]" style={{ fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        <About />
        <Products />
        <Services />
        <Awards />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
