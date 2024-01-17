import data_product from "../assets/data";
import Card from "./Card";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";
import Hero from "./Hero";
import { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";

const Contain = () => {
  const { items } = useContext(StoreContext);

  return (
    <div className="px-6 md:px-[138px] bg-slate-50">
      <Hero />

      <div id="list" className="flex flex-col gap-4 my-10">
        <h3 className="font-medium text-3xl mb-6">Daftar Foto</h3>
        <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-8">
          {data_product.map((product) => {
            return (
              <div key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>

      {items.length ? (
        <>
          <div className="my-12">
            <h3 className="font-medium text-3xl mb-4">Review Pesanan</h3>
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

      <OrdererInfo />
    </div>
  );
};

export default Contain;
