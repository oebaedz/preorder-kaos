import { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";

const OrdererInfo = () => {
  const { items } = useContext(StoreContext);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !noHP || !alamat) {
      alert("Lengkapi data Anda!");
    } else if (!items.length) {
      alert("Pilih produk dulu!");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        alert("Anda berhasil masuk list Pre Order!");
      }, 1100);
    }
  };

  const Warning = () => {
    return (
      <div className="my-12">
          <h3 className="font-bold text-3xl mb-4">Warning</h3>
          <p className="italic">
            Untuk melanjutkan pemesanan, diharuskan untuk membayar DP minimal
            50% dari total harga.
          </p>
          <p className="italic">DP bisa ditransfer ke No Rekening BRI a/n:</p>
          <p className="italic font-medium">A. JAMIL HIDAYATULLAH</p>
          <p className="italic font-medium">081-5201-2323-1222</p>
        </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="mt-12 font-medium text-3xl">Informasi Pemesan</h3>
      <form>
        <div className="mb-12 md:flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan nama"
              className="input input-bordered w-full"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                No. HP / WhatsApp
              </span>
            </div>
            <input
              type="text"
              placeholder="Masukkan nomor HP"
              className="input input-bordered w-full "
              onChange={(e) => setNoHP(e.target.value)}
              value={noHP}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-lg font-medium">Alamat</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan alamat"
              className="input input-bordered w-full"
              onChange={(e) => setAlamat(e.target.value)}
              value={alamat}
            />
          </label>
        </div>
        {items.length ? <Warning /> : "" }
        <button
          type="submit"
          className="btn btn-accent w-32 mb-20"
          onClick={handleSubmit}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner"></span>
              Loading...
            </>
          ) : (
            <p>Gasss</p>
          )}
        </button>
      </form>
      
    </div>
  );
};

export default OrdererInfo;
