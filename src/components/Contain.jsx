import data_product from "../assets/data";
import Card from "./Card";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";
import Hero from "./Hero";
import { useContext, useRef, useState } from "react";
import { StoreContext } from "../StoreContext";
import kids_product from "../assets/kids";

const Contain = () => {
  const { items, checkoutRef, listRef } = useContext(StoreContext);
  const [activeCategory, setActiveCategory] = useState("umum"); // default to data_product

  const getActiveProducts = () => {
    return activeCategory === "umum" ? data_product : kids_product;
  };

  return (
    <div className="px-6 md:px-[138px] bg-base-200">
      <Hero />

      <section ref={listRef} className="flex flex-col gap-4 my-10 pt-12">
        <h3 className="font-medium text-3xl mb-6">Daftar Produk</h3>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeCategory === "umum" ? "bg-accent text-black" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("umum")}
          >
            Kaos Dewasa
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeCategory === "anak" ? "bg-accent text-black" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("anak")}
          >
            Kaos Anak
          </button>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap justify-center gap-2 md:gap-8">
          {getActiveProducts().map((product) => {
            return (
              <div key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </section>

      <section ref={checkoutRef} >
        {items.length ? (
          <>
            <div className="my-12">
              <h3 className="font-medium text-3xl mb-4 ">Review Pesanan</h3>
              <Summary />
            </div>
          </>
        ) : (
          <div className="my-12">
            <h3 className="font-medium text-3xl mb-4">Review Pesanan</h3>
            <p className="italic">
              Silahkan pilih salah satu produk terlebih dahulu
            </p>
          </div>
        )}
      </section>

      <OrdererInfo />
    </div>
  );
};

export default Contain;
