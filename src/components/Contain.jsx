import Card from "./Card";
import Footer from "./Footer";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";

const Contain = () => {
  return (
    <div className="p-6 md:px-32 bg-gray-100 my">
      <div className="mb-12">
        <h3 className="font-bold text-xl">Pre Order Foto Masyayikh</h3>
        <p className="text-lg">
          Yo, ngireng se messenah foto-foto pengasuh kita di PP Darul Lughah Wal
          Karomah
        </p>
      </div>

      <div className="flex flex-col gap-4 my-12">
        <h3 className="font-bold text-xl">List Foto</h3>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <OrdererInfo />
      <Summary />

      <button className="btn btn-accent w-32 mb-20">Pesan</button>

      <Footer />
    </div>
  );
};

export default Contain;
