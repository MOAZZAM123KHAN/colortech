import React from "react";
import { Link } from "react-router-dom";

const productDropdownLinks = [
  "Mono Cartons",
  "Pressure Sensitive Label",
  "Heat Transfer Films",
  "In Mold Labeling",
];

const quickLinks = [
  { label: "Home", to: "/#hero" },
  { label: "About Us", to: "/#about" },
  // { label: "Services", to: "/#services" },
  // { label: "Awards", to: "/#awards" },
  { label: "Contact Us", to: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07111B] px-4 pb-8 pt-14 text-gray-500 sm:px-6 sm:pt-16 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Colourtech logo" className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11" />
            <div>
              <p className="font-[Georgia] text-sm tracking-[0.16em] text-[#F5F0E8] sm:text-base sm:tracking-[0.2em]">
                COLOURTECH
              </p>
              <p className="text-xs text-gray-500">Advanced Labeling</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Advanced Heat Transfer, Foil, and In-Mold labeling solutions designed for precision,
            durability, and strong shelf presence.
          </p>
          <div className="mt-5 flex gap-3">
            {["f", "in"].map((social) => (
              <a
                key={social}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-gray-700 text-sm transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-[#F5F0E8]">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-[#C9A84C]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="hover:text-[#C9A84C]">
                Catalog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#F5F0E8]">Products</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/products" className="hover:text-[#C9A84C]">
                Browse catalog
              </Link>
            </li>
            {productDropdownLinks.map((item) => (
              <li key={item}>
                <Link to="/#products" className="hover:text-[#C9A84C]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#F5F0E8]">Colourtech</p>
          <p className="mt-4 text-sm leading-relaxed">
            Led by Mo Anas with a mission to bring packaging to life through cutting-edge printing
            technology.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-2 border-t border-gray-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Colourtech. All rights reserved.</p>
        <p>Plot No B2B,Sa. Supertech industrial park,at-village sanjan,Ta. Umbergoan, District-Valsad-396150 India</p>
      </div>
    </footer>
  );
}
