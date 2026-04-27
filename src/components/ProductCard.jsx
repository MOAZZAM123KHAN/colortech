import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative bg-gradient-to-br from-[#FFF9EC] to-[#F7FBFF] p-4">
        <img
          src={product.images[activeImage]}
          alt={product.title}
          className="h-52 w-full rounded-xl object-cover sm:h-56"
          loading="lazy"
        />
        <span className="absolute left-6 top-6 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {product.code}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">{product.size}</span>
          <span className="font-semibold text-pink-600">{product.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-11 w-11 overflow-hidden rounded-lg border-2 ${
                index === activeImage ? "border-[#C9A84C]" : "border-transparent"
              }`}
            >
              <img src={image} alt={`${product.title} ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-[#0D1B2A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#13263C]"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
