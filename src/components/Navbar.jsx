// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { label: "Home", to: "/#hero" },
//   { label: "About Us", to: "/#about" },
//   // { label: "Services", to: "/#services" },
//   // { label: "Awards", to: "/#awards" },
//   // { label: "Global Reach", to: "/#global" },
//   { label: "Contact Us", to: "/#contact" },
//   { label: "Catalog", to: "/products" },
// ];

// export default function Navbar({ isScrolled }) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-xl" : "bg-transparent"
//       }`}
//     >
//       <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
//         <Link to="/" className="flex items-center gap-2 sm:gap-3">
//           <img
//             src="/logo.png"
//             alt="Colourtech logo"
//             className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
//           />
//           <span className="leading-tight">
//             <span className="block font-[Georgia] text-sm tracking-[0.16em] text-[#F5F0E8] sm:text-base lg:text-lg">
//               COLOURTECH
//             </span>
//             <span className="block text-[10px] text-[#F5F0E8]/75 sm:text-xs">Labeling Solutions</span>
//           </span>
//         </Link>

//         <div className="hidden items-center gap-8 lg:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               to={link.to}
//               className="text-sm font-medium text-[#F5F0E8] transition hover:text-[#C9A84C]"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden lg:block">
//           <Link
//             to="/#contact"
//             className="rounded-full bg-[#C9A84C] px-6 py-2.5 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-110"
//           >
//             Request Quote
//           </Link>
//         </div>

//         <button
//           className="relative h-9 w-9 lg:hidden"
//           onClick={() => setMobileOpen((prev) => !prev)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`absolute left-2 top-3 h-0.5 w-6 bg-[#F5F0E8] transition ${
//               mobileOpen ? "translate-y-2.5 rotate-45" : ""
//             }`}
//           />
//           <span
//             className={`absolute left-2 top-[22px] h-0.5 w-6 bg-[#F5F0E8] transition ${
//               mobileOpen ? "opacity-0" : "opacity-100"
//             }`}
//           />
//           <span
//             className={`absolute left-2 top-8 h-0.5 w-6 bg-[#F5F0E8] transition ${
//               mobileOpen ? "-translate-y-2.5 -rotate-45" : ""
//             }`}
//           />
//         </button>
//       </nav>

//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0D1B2A]/95 px-4 transition-all duration-300 sm:px-6 lg:hidden ${
//           mobileOpen ? "max-h-[520px] py-4" : "max-h-0 py-0"
//         }`}
//       >
//         <div className="space-y-3">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               to={link.to}
//               className="block text-sm text-[#F5F0E8] transition hover:text-[#C9A84C]"
//               onClick={() => setMobileOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link
//             to="/#contact"
//             className="block rounded-full bg-[#C9A84C] px-4 py-2.5 text-center text-sm font-semibold text-[#0D1B2A]"
//             onClick={() => setMobileOpen(false)}
//           >
//             Request Quote
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "Home", to: "/#hero" },
  { label: "About Us", to: "/#about" },
  { label: "Contact Us", to: "/#contact" },
  { label: "Catalog", to: "/products" },
];

export default function Navbar({ isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.png"
            alt="Colourtech logo"
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />

          <span className="leading-tight">
            <span className="block font-[Georgia] text-sm tracking-[0.16em] text-[#F5F0E8] sm:text-base lg:text-lg">
              COLOURTECH
            </span>
            <span className="block text-[10px] text-[#F5F0E8]/75 sm:text-xs">
              Labeling Solutions
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                className="text-sm font-medium text-[#F5F0E8] transition hover:text-[#C9A84C]"
              >
                {link.label}
              </HashLink>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-[#F5F0E8] transition hover:text-[#C9A84C]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <HashLink
            smooth
            to="/#contact"
            className="rounded-full bg-[#C9A84C] px-6 py-2.5 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-110"
          >
            Request Quote
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative h-9 w-9 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-2 top-3 h-0.5 w-6 bg-[#F5F0E8] transition ${
              mobileOpen ? "translate-y-2.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[22px] h-0.5 w-6 bg-[#F5F0E8] transition ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 top-8 h-0.5 w-6 bg-[#F5F0E8] transition ${
              mobileOpen ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0D1B2A]/95 px-4 transition-all duration-300 sm:px-6 lg:hidden ${
          mobileOpen ? "max-h-[520px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="space-y-3">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                className="block text-sm text-[#F5F0E8] transition hover:text-[#C9A84C]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </HashLink>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm text-[#F5F0E8] transition hover:text-[#C9A84C]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <HashLink
            smooth
            to="/#contact"
            className="block rounded-full bg-[#C9A84C] px-4 py-2.5 text-center text-sm font-semibold text-[#0D1B2A]"
            onClick={() => setMobileOpen(false)}
          >
            Request Quote
          </HashLink>
        </div>
      </div>
    </header>
  );
}