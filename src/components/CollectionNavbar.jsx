import React from "react";

export default function CollectionNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#collection" className="flex items-center gap-3">
          <img src="/logo.png" alt="Colourtech logo" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-[Georgia] text-sm tracking-[0.16em] text-[#0D1B2A] sm:text-base">COLOURTECH</p>
            <p className="text-xs text-slate-500">Collection Page</p>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#collection"
            className="rounded-full bg-[#0D1B2A] px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
          >
            Collection
          </a>
        </div>
      </nav>
    </header>
  );
}
