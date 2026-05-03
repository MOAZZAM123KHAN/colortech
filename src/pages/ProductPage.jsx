import React from "react";
import Footer from "../components/Footer";
import CollectionNavbar from "../components/CollectionNavbar";
import ProductCard from "../components/ProductCard";
import { catalogProducts } from "../data/products";

export default function ProductPage() {
  const htlProducts = catalogProducts.filter(
    (product) => product.category === "HTL"
  );

  const imlProducts = catalogProducts.filter(
    (product) => product.category === "IML"
  );

  return (
    <div
      className="bg-[#0D1B2A] text-[#0D1B2A]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <CollectionNavbar />

      <main className="bg-white text-slate-900">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <div className="mb-12 text-center sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
              Product Catalog
            </p>

            <h1 className="mt-3 font-[Georgia] text-3xl text-[#0D1B2A] sm:text-4xl">
              Colourtech Products
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Explore our HTL and IML product collections.
            </p>
          </div>

          <section id="htl" className="mb-20 scroll-mt-28 sm:scroll-mt-32">
            <div className="mb-8">
              <h2 className="font-[Georgia] text-3xl text-[#0D1B2A]">
                Heat Transfer Labels (HTL)
              </h2>
              <p className="mt-2 text-slate-600">
                Premium heat transfer labels designed for sharp branding and durability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {htlProducts.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
          </section>

          <section id="iml" className="scroll-mt-28 sm:scroll-mt-32">
            <div className="mb-8">
              <h2 className="font-[Georgia] text-3xl text-[#0D1B2A]">
                In-Mold Labels (IML)
              </h2>
              <p className="mt-2 text-slate-600">
                Durable integrated labeling solutions for premium packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {imlProducts.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
