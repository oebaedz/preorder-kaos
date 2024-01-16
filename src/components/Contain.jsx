import data_product from "../assets/data";
import Card from "./Card";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";
import Hero from "./Hero";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";

const Contain = () => {
  const { items } = useContext(StoreContext);

  const handleSubmit = () => {
    if (!items.length) {
      alert('Pilih produk dulu!')
    } else {
      console.log(items)
    }
  }

  return (
    <div className="px-6 md:px-[138px] bg-slate-50">
      <Hero />

      <div id="list" className="flex flex-col gap-4 my-10">
        <h3 className="font-medium text-3xl mb-6">Daftar Foto</h3>
        <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-8">
          {data_product.map((data) => {
            return (
              <div key={data.id}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>

      <OrdererInfo />
      {items.length ? (
        <div className="my-12">
          <h3 className="font-medium text-3xl mb-4">Review Pesanan</h3>
          <Summary />
        </div>
      ) : (
        <div className="my-12">
          <h3 className="font-medium text-3xl mb-4">Review Pesanan</h3>
          <p className="italic">Silahkan pilih salah satu produk terlebih dahulu</p>
        </div>
      )}

      <button type="submit" onClick={handleSubmit} className="btn btn-accent w-32 mb-20">
        Pesan
      </button>
    </div>
  );
};

export default Contain;
