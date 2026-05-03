import React, { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  const openModal = () => {
    setModalImage(activeImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/10 lg:flex lg:h-full lg:min-h-[560px] lg:flex-col xl:min-h-[620px]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF9EC] to-[#F7FBFF] p-5 lg:p-6">
          <div className="flex h-56 items-center justify-center rounded-xl bg-white/45 p-3 sm:h-60 lg:h-64 lg:p-5 xl:h-72">
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="max-h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <span className="absolute left-6 top-6 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            {product.code}
          </span>
        </div>

        <div className="space-y-4 p-5 lg:flex lg:flex-1 lg:flex-col lg:p-6">
          <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">{product.size}</span>
            <span className="text-right font-semibold text-pink-600">{product.price}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-11 w-11 overflow-hidden rounded-lg border-2 bg-white p-0.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/70 ${
                  index === activeImage
                    ? "border-[#C9A84C] shadow-md shadow-[#C9A84C]/20"
                    : "border-slate-100"
                }`}
                aria-label={`Show ${product.title} image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="h-full w-full rounded-md object-contain transition duration-300"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={openModal}
            className="w-full rounded-xl bg-[#0D1B2A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#13263C] hover:shadow-md lg:mt-auto"
          >
            View Details
          </button>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1B2A]/80 p-4 opacity-100 backdrop-blur-md transition-opacity duration-300"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} details`}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/30 transition duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-[#0D1B2A] shadow-md transition duration-300 hover:bg-[#0D1B2A] hover:text-white"
              aria-label="Close product details"
            >
              &times;
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-gradient-to-br from-[#FFF9EC] to-[#F7FBFF] p-5 sm:p-8">
                <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-white/55 p-4 sm:min-h-[520px]">
                  <img
                    src={product.images[modalImage]}
                    alt={product.title}
                    className="max-h-[72vh] w-full object-contain transition duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  {product.code}
                </p>
                <h2 className="mt-3 font-[Georgia] text-3xl text-[#0D1B2A] sm:text-4xl">
                  {product.title}
                </h2>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
                    {product.size}
                  </span>
                  <span className="font-semibold text-pink-600">
                    {product.price}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {product.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setModalImage(index)}
                      className={`h-16 w-16 overflow-hidden rounded-xl border-2 bg-white p-1 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/70 ${
                        index === modalImage
                          ? "border-[#C9A84C] shadow-md shadow-[#C9A84C]/20"
                          : "border-slate-100"
                      }`}
                      aria-label={`View ${product.title} image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        className="h-full w-full rounded-lg object-contain"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
