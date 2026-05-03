// import React from "react";

// export default function About() {
//   return (
//     <section id="about" className="bg-[#F5F0E8] px-4 py-16 text-[#0D1B2A] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
//       <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center">
//         <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
//           <div className="absolute left-0 top-8 h-44 w-48 rounded-2xl bg-[#13263C] sm:h-56 sm:w-64 lg:h-64 lg:w-72" />
//           <div className="absolute left-10 top-0 h-48 w-52 rounded-2xl bg-[#C9A84C]/90 shadow-2xl sm:left-14 sm:h-64 sm:w-64 lg:left-16 lg:h-72 lg:w-72" />
//           <div className="absolute left-16 top-10 grid h-36 w-36 place-items-center rounded-2xl bg-[#0D1B2A] text-5xl font-bold text-[#C9A84C] sm:left-20 sm:h-48 sm:w-48 sm:text-6xl lg:left-24 lg:top-12 lg:h-56 lg:w-56 lg:text-7xl">
//             M
//           </div>
//           <div className="absolute bottom-3 right-3 rounded-2xl bg-[#C9A84C] px-4 py-3 shadow-xl sm:bottom-5 sm:right-5 sm:px-5 sm:py-3 lg:bottom-6 lg:right-6 lg:px-6 lg:py-4">
//             <p className="text-2xl font-semibold leading-none sm:text-3xl">25+</p>
//             <p className="text-xs uppercase tracking-widest text-[#0D1B2A]/80">Years</p>
//           </div>
//         </div>

//         <div>
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D1B2A]/70">── About Us</p>
//           <h2 className="mt-4 font-[Georgia] text-3xl leading-tight sm:text-4xl md:mt-5 md:text-5xl">
//             Company Profile: Colourtech
//           </h2>
//           <p className="mt-6 text-base leading-relaxed text-[#0D1B2A]/80">
//             Colourtech is a premier manufacturer specializing in advanced labeling and decoration
//             solutions. We provide high-quality Heat Transfer Labels (HTL), Foil, and In-Mold Labels
//             (IML) designed to enhance brand identity and product durability.
//           </p>
//           <p className="mt-4 text-base leading-relaxed text-[#0D1B2A]/80">
//             Led by Mo Anas, our mission is to provide cutting-edge printing technology that brings
//             packaging to life with precision quality, customization, and lasting performance.
//           </p>

//           <div className="mt-7 flex flex-wrap gap-3">
//             {["Mo Anas", "HTL Specialists", "IML Experts"].map((name) => (
//               <span
//                 key={name}
//                 className="rounded-full border border-[#0D1B2A]/15 bg-white px-4 py-2 text-sm font-medium text-[#0D1B2A]"
//               >
//                 {name}
//               </span>
//             ))}
//           </div>

//           {/* <a
//             href="#contact"
//             className="mt-8 inline-block rounded-full bg-[#0D1B2A] px-6 py-3 text-sm font-semibold text-[#F5F0E8] transition hover:bg-[#13263C]"
//           >
//             Know More →
//           </a> */}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F5F0E8] px-4 py-16 text-[#0D1B2A] sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center">
        
        {/* Left Visual Section */}
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
          
          {/* Background Layer */}
          <div className="absolute left-0 top-10 h-52 w-56 rounded-3xl bg-[#13263C] shadow-xl sm:h-64 sm:w-72 lg:h-72 lg:w-80" />

          {/* Gold Layer */}
          <div className="absolute left-10 top-0 h-56 w-60 rounded-3xl bg-[#C9A84C]/90 shadow-2xl sm:left-14 sm:h-72 sm:w-72 lg:left-16 lg:h-80 lg:w-80" />

          {/* CEO Image */}
          <div className="absolute left-16 top-10 h-40 w-40 overflow-hidden rounded-3xl shadow-2xl sm:left-20 sm:h-52 sm:w-52 lg:left-24 lg:top-14 lg:h-60 lg:w-60">
            <img
              src="/images/ceo.png"
              alt="CEO"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-6 right-4 rounded-2xl bg-[#C9A84C] px-5 py-4 shadow-xl sm:right-8 lg:right-10">
            <p className="text-2xl font-bold leading-none sm:text-3xl">
              MD/CEO
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#0D1B2A]/80">
              Mo Anas
            </p>
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D1B2A]/70">
            ── About Us
          </p>

          <h2 className="mt-4 font-[Georgia] text-3xl leading-tight sm:text-4xl md:mt-5 md:text-5xl">
            Company Profile: Colourtech
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#0D1B2A]/80">
            Colourtech is a premier manufacturer specializing in advanced
            labeling and decoration solutions. We provide high-quality Heat
            Transfer Labels (HTL), Foil, and In-Mold Labels (IML) designed to
            enhance brand identity and product durability.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#0D1B2A]/80">
            Led by Mo Anas, our mission is to provide cutting-edge printing
            technology that brings packaging to life with precision quality,
            customization, and lasting performance.
          </p>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[ "HTL Specialists", "IML Experts"].map((name) => (
              <span
                key={name}
                className="rounded-full border border-[#0D1B2A]/15 bg-white px-4 py-2 text-sm font-medium text-[#0D1B2A] shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#0D1B2A] px-6 py-3 text-sm font-semibold text-[#F5F0E8] transition hover:bg-[#13263C]"
          >
            Know More →
          </a>
        </div>
      </div>
    </section>
  );
}