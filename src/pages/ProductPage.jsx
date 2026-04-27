import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { catalogProducts } from "../data/products";

export default function ProductPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0D1B2A] text-[#0D1B2A]" style={{ fontFamily: "system-ui, sans-serif" }}>
      <Navbar isScrolled={isScrolled} />

      <main className="bg-white pt-24 text-slate-900 sm:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
              Product Catalog
            </p>
            <h1 className="mt-3 font-[Georgia] text-3xl text-[#0D1B2A] sm:text-4xl">
              Colourtech Products
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Browse our collection. Images load from your local{" "}
              <span className="font-mono text-xs text-slate-500">public/products</span> folder.
            </p>
          </div>

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {catalogProducts.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
