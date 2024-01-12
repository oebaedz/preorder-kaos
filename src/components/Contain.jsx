import Card from "./Card";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";

const Contain = () => {
  return (
    <div className="p-6 md:px-[138px] bg-slate-50 my">
      <div className="my-12 space-y-4">
        <h3 className="font-medium text-3xl">Pre Order Foto Masyayikh</h3>
        <p className="text-xl font-light">
          Yo, ngireng se messenah foto-foto pengasuh kita di PP Darul Lughah Wal
          Karomah
        </p>
      </div>

      <div className="flex flex-col gap-4 my-16">
        <h3 className="font-medium text-3xl">List Foto</h3>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <OrdererInfo />
      <Summary />

      <button className="btn btn-accent w-32 mb-20">Pesan</button>
    </div>
  );
};

export default Contain;
