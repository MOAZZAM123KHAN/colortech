import React from "react";

const heroSlides = [
  {
    industry: "Heat Transfer Labels",
    title: "Precision Branding With HTL",
    subtitle:
      "Colourtech delivers high-resolution Heat Transfer Labels built for sharp detail, durability, and brand impact.",
  },
  {
    industry: "Foil Decoration",
    title: "Premium Foil Finishes",
    subtitle:
      "Enhance product shelf appeal with metallic and decorative foil effects engineered for consistent quality.",
  },
  {
    industry: "In-Mold Labels",
    title: "Integrated IML Performance",
    subtitle:
      "Our In-Mold Labels merge seamlessly with containers, ensuring moisture and chemical resistance in tough conditions.",
  },
  {
    industry: "Custom Manufacturing",
    title: "Built Around Your Product",
    subtitle:
      "From concept to production, we tailor every label to your substrate, shape, and market timeline.",
  },
];

export const HERO_SLIDES_COUNT = heroSlides.length;

export default function Hero({ activeSlide, setActiveSlide }) {
  const slide = heroSlides[activeSlide];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#07111B] via-[#0D1B2A] to-[#13263C] pt-24 text-[#F5F0E8] sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.15) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-[-140px] top-1/2 hidden h-[580px] w-[580px] -translate-y-1/2 lg:block">
        <div className="absolute inset-0 rounded-full border border-[#C9A84C]/30" />
        <div className="absolute inset-[60px] rounded-full border border-[#C9A84C]/20" />
        <div className="absolute inset-[120px] rounded-full border border-[#C9A84C]/15" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center px-4 pb-12 sm:px-6 sm:pb-16 md:pb-24 lg:px-10 lg:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#C9A84C] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] sm:px-4 sm:text-xs">
            {slide.industry}
          </span>
          <h1 className="mt-5 text-3xl font-normal leading-tight sm:text-4xl md:mt-6 md:text-6xl">
            {slide.title.split(" ").map((word, idx) => (
              <span
                key={`${word}-${idx}`}
                className="mr-3 inline-block font-[Georgia]"
                style={{
                  animation: "fadeUp 700ms ease forwards",
                  animationDelay: `${idx * 110}ms`,
                  opacity: 0,
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p
            className="mt-5 max-w-2xl text-base text-[#F5F0E8]/80 sm:text-lg"
            style={{ animation: "fadeUp 800ms ease 280ms forwards", opacity: 0 }}
          >
            {slide.subtitle}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fadeUp 900ms ease 420ms forwards", opacity: 0 }}
          >
            <a
              href="#contact"
              className="rounded-full bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-110 sm:px-6"
            >
              Request A Quote →
            </a>
            <a
              href="#products"
              className="rounded-full border border-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#F5F0E8] transition hover:bg-[#C9A84C]/10 sm:px-6"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[88px] left-4 flex items-center gap-2 sm:bottom-24 sm:left-6 md:left-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-2.5 rounded-full transition ${
              activeSlide === idx ? "w-10 bg-[#C9A84C]" : "w-2.5 bg-[#F5F0E8]/45"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="relative border-t border-white/10 bg-[#0D1B2A]/85 backdrop-blur-sm md:absolute md:bottom-0 md:left-0 md:right-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-4 text-center sm:grid-cols-2 sm:gap-4 sm:px-6 md:grid-cols-4 md:gap-6 md:py-5 lg:px-10">
          {[
            "HTL • Foil • IML",
            "High-Resolution Printing",
            "Custom Label Development",
            "Fast Turnaround",
          ].map((stat) => (
            <div key={stat} className="text-sm font-medium text-[#F5F0E8]/90">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
