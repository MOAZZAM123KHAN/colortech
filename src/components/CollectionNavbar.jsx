import React from "react";

export default function CollectionNavbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Colourtech logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="font-[Georgia] text-sm tracking-[0.16em] text-[#0D1B2A] sm:text-base">
              COLOURTECH
            </p>
            <p className="text-xs text-slate-500">Product Catalog</p>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#htl"
            onClick={(event) => scrollToSection(event, "#htl")}
            className="rounded-full border border-[#0D1B2A]/20 bg-white px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#0D1B2A] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white hover:shadow-md sm:px-5 sm:text-sm"
          >
            HTL
          </a>

          <a
            href="#iml"
            onClick={(event) => scrollToSection(event, "#iml")}
            className="rounded-full border border-[#0D1B2A]/20 bg-white px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#0D1B2A] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white hover:shadow-md sm:px-5 sm:text-sm"
          >
            IML
          </a>
        </div>
      </nav>
    </header>
  );
}
