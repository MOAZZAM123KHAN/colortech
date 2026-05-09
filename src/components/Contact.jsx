// import React, { useEffect, useRef, useState } from "react";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//     event.currentTarget.reset();
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <section id="contact" className="bg-[#0D1B2A] px-4 py-16 text-[#F5F0E8] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
//       <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
//         <div>
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
//             ── Contact Us
//           </p>
//           <h2 className="mt-5 font-[Georgia] text-3xl leading-tight sm:text-4xl md:text-5xl">
//             Let&apos;s Build Your Next Colourtech Label
//           </h2>
//           <p className="mt-5 max-w-xl text-[#F5F0E8]/80">
//             Share your packaging material and design requirement. We will guide you through
//             consultation, prototyping, manufacturing, and quality validation.
//           </p>

//           <div className="mt-8 space-y-4">
//             {[
//               {
//                 icon: "📍",
//                 text: "Colourtech Manufacturing Unit, Mumbai",
//               },
//               { icon: "📞", text: "+91 92148 21548" },
//               { icon: "✉️", text: "hello@colourtechlabels.com" },
//             ].map((item) => (
//               <div key={item.text} className="flex items-start gap-3">
//                 <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#C9A84C]/20 text-lg">
//                   {item.icon}
//                 </span>
//                 <p className="text-sm leading-relaxed text-[#F5F0E8]/85">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
//         >
//           <div className="grid gap-4 sm:grid-cols-2">
//             <input
//               type="text"
//               required
//               placeholder="Full Name"
//               className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
//             />
//             <input
//               type="email"
//               required
//               placeholder="Email Address"
//               className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
//             />
//           </div>
//           <input
//             type="text"
//             required
//             placeholder="Company"
//             className="mt-4 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
//           />
//           <textarea
//             required
//             rows={5}
//             placeholder="Message"
//             className="mt-4 w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="mt-5 w-full rounded-xl bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-110"
//           >
//             Submit
//           </button>

//           {submitted && (
//             <p className="mt-4 rounded-lg border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
//               ✅ Message Sent!
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    const whatsappMessage = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/919214821548?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    event.currentTarget.reset();

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0D1B2A] px-4 py-16 text-[#F5F0E8] sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
            ── Contact Us
          </p>

          <h2 className="mt-5 font-[Georgia] text-3xl leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build Your Next Colourtech Label
          </h2>

          <p className="mt-5 max-w-xl text-[#F5F0E8]/80">
            Share your packaging material and design requirement. We will guide
            you through consultation, prototyping, manufacturing, and quality
            validation.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                icon: "📍",
                text: "Colourtech Manufacturing Unit, Mumbai",
              },
              {
                icon: "📞",
                text: "+91 9214821548",
              },
              {
                icon: "✉️",
                text: "colourtech82@gmail.com",
              },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#C9A84C]/20 text-lg">
                  {item.icon}
                </span>

                <p className="text-sm leading-relaxed text-[#F5F0E8]/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="company"
            required
            placeholder="Company"
            className="mt-4 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="mt-4 w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/55 focus:border-[#C9A84C] focus:outline-none"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-110"
          >
            Send via WhatsApp
          </button>

          {submitted && (
            <p className="mt-4 rounded-lg border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
              ✅ Redirecting to WhatsApp...
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
