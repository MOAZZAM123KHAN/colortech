// import React from "react";

// const productCards = [
//   {
//     title: "Heat Transfer Labels (HTL)",
//     icon: "🔥",
//     color: "#C9A84C",
//     description:
//       "High-definition transfer labels that provide excellent adhesion and long-term durability on diverse packaging materials.",
//   },
//   {
//     title: "Foil Decoration Labels",
//     icon: "✨",
//     color: "#E07B3A",
//     description:
//       "Premium foil finishing solutions that enhance visual impact with clean metallic effects and precise detailing.",
//   },
//   {
//     title: "In-Mold Labels (IML)",
//     icon: "🏭",
//     color: "#4A9B7F",
//     description:
//       "Container-integrated labels engineered for resistance against chemicals, moisture, and wear in demanding environments.",
//   },
//   {
//     title: "Custom Label Development",
//     icon: "🏷️",
//     color: "#5B7EC9",
//     description:
//       "Bespoke designs tailored to unique product shapes, surfaces, and branding requirements with rapid execution.",
//   },
// ];

// export default function Products() {
//   return (
//     <section id="products" className="bg-[#0D1B2A] px-4 py-16 text-[#F5F0E8] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
//       <div className="mx-auto w-full max-w-7xl">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
//             Our Products
//           </p>
//           <h2 className="mt-4 font-[Georgia] text-3xl leading-tight sm:text-4xl md:text-5xl">
//             Our Core Specializations
//           </h2>
//           <div className="mx-auto mt-6 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
//         </div>

//         <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {productCards.map((card) => (
//             <article
//               key={card.title}
//               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C9A84C]/70"
//             >
//               <div
//                 className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl"
//                 style={{
//                   background: `linear-gradient(135deg, ${card.color}66, transparent)`,
//                 }}
//               />
//               <div
//                 className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
//                 style={{ backgroundColor: `${card.color}22` }}
//               >
//                 {card.icon}
//               </div>
//               <h3 className="mt-4 font-[Georgia] text-xl sm:text-2xl">{card.title}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-[#F5F0E8]/75">{card.description}</p>
//               <a
//                 href="#contact"
//                 className="mt-5 inline-block text-sm font-semibold text-[#C9A84C] transition hover:translate-x-1"
//               >
//                 Learn More →
//               </a>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const productCards = [
  {
    title: "Heat Transfer Labels (HTL)",
    icon: "🔥",
    color: "#C9A84C",
    description:
      "High-definition transfer labels that provide excellent adhesion and long-term durability on diverse packaging materials.",
    link: "/products#htl",
  },
  {
    title: "In-Mold Labels (IML)",
    icon: "🏭",
    color: "#4A9B7F",
    description:
      "Container-integrated labels engineered for resistance against chemicals, moisture, and wear in demanding environments.",
    link: "/products#iml",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#0D1B2A] px-4 py-16 text-[#F5F0E8] sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
            Our Products
          </p>

          <h2 className="mt-4 font-[Georgia] text-3xl leading-tight sm:text-4xl md:text-5xl">
            Our Core Specializations
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C9A84C]/70"
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 rounded-bl-3xl"
                style={{
                  background: `linear-gradient(135deg, ${card.color}66, transparent)`,
                }}
              />

              <div
                className="grid h-14 w-14 place-items-center rounded-2xl text-3xl"
                style={{ backgroundColor: `${card.color}22` }}
              >
                {card.icon}
              </div>

              <h3 className="mt-5 font-[Georgia] text-2xl">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#F5F0E8]/75">
                {card.description}
              </p>

              <a
                href={card.link}
                className="mt-6 inline-block text-sm font-semibold text-[#C9A84C] transition hover:translate-x-1"
              >
                Explore Collection →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
