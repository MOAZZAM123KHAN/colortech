import React from "react";

const awards = [
  {
    title: "HTL Excellence Recognition",
    body: "Advanced Label Manufacturing",
    year: "Precision Quality",
    color: "#C9A84C",
  },
  {
    title: "IML Performance Recognition",
    body: "Durability & Customization",
    year: "Fast Turnaround",
    color: "#5B7EC9",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-[#0D1B2A] px-4 py-16 text-[#F5F0E8] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Highlights</p>
        <h2 className="mt-4 font-[Georgia] text-3xl sm:text-4xl md:text-5xl">Built On Performance</h2>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <article
              key={award.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8"
            >
              <div
                className="grid h-14 w-14 place-items-center rounded-full text-2xl"
                style={{ backgroundColor: `${award.color}22` }}
              >
                🏆
              </div>
              <h3
                className="mt-5 text-2xl font-normal sm:text-3xl"
                style={{ color: award.color, fontFamily: "Georgia, serif" }}
              >
                {award.title}
              </h3>
              <p className="mt-3 text-[#F5F0E8]/80">{award.body}</p>
              <p className="mt-1 text-sm text-[#F5F0E8]/65">{award.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
