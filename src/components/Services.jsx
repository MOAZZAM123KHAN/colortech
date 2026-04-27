import React from "react";

const services = [
  {
    icon: "🎯",
    title: "Precision Quality",
    description:
      "We use high-resolution printing to ensure every detail of your brand is captured perfectly.",
  },
  {
    icon: "🛡️",
    title: "Durability",
    description:
      "Our labels are designed to withstand harsh environments for long-lasting brand presence.",
  },
  {
    icon: "🧩",
    title: "Customization",
    description:
      "We collaborate closely to build bespoke label designs for specific product shapes and materials.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "We prioritize efficient production timelines to match the speed of your market launches.",
  },
];

export default function Services() {
  const processSteps = [
    "Consultation: Understanding your packaging material and design requirements.",
    "Design & Prototyping: Creating a visual proof for your approval.",
    "Manufacturing: Utilizing high-speed, precision machinery for label production.",
    "Quality Control: Rigorous testing to ensure heat resistance, durability, and finish quality.",
  ];

  return (
    <section id="services" className="bg-[#F5F0E8] px-4 py-16 text-[#0D1B2A] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D1B2A]/70">
            ── Why Choose Colourtech
          </p>
          <h2 className="mt-5 font-[Georgia] text-3xl leading-tight sm:text-4xl md:text-5xl">
            Why Choose Colourtech?
          </h2>
          <p className="mt-5 max-w-2xl text-[#0D1B2A]/80">
            We leverage state-of-the-art manufacturing processes to deliver labels that are not only
            beautiful but also resistant to wear, chemicals, and moisture.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0D1B2A]/8 text-xl">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0D1B2A]/75">{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hidden rounded-3xl bg-[#0D1B2A] p-8 text-[#F5F0E8] lg:block">
          <h3 className="font-[Georgia] text-3xl">Our Process</h3>
          <div className="mt-8 space-y-4">
            {processSteps.map((step) => (
              <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                {step}
              </div>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-[#C9A84C]/60 pl-4 text-sm italic text-[#F5F0E8]/85">
            "Our mission is to provide cutting-edge printing technology that brings your packaging to
            life."
          </p>
        </aside>
      </div>
    </section>
  );
}
