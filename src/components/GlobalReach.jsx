import React from "react";

const regions = [
  {
    name: "Core Markets",
    markets: ["Consumer Packaging", "Industrial Packaging"],
  },
  {
    name: "Label Types",
    markets: ["Heat Transfer Labels", "Foil Decoration", "In-Mold Labels"],
  },
  {
    name: "Delivery Model",
    markets: ["Consultation", "Design & Prototyping", "Manufacturing", "Quality Control"],
  },
];

export default function GlobalReach() {
  return (
    <section id="global" className="bg-[#F5F0E8] px-4 py-16 text-[#0D1B2A] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D1B2A]/70">Capabilities</p>
          <h2 className="mt-4 font-[Georgia] text-3xl sm:text-4xl md:text-5xl">End-To-End Labeling Expertise</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {regions.map((region) => (
            <article key={region.name} className="rounded-2xl bg-[#0D1B2A] p-6 text-[#F5F0E8]">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C9A84C]">{region.name}</p>
              <ul className="mt-4 space-y-3">
                {region.markets.map((market) => (
                  <li key={market} className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
                    <span>{market}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
