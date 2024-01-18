import { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";

const OrdererInfo = () => {
  const { items, setItems } = useContext(StoreContext);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);
  const [warn, setWarn] = useState(false);
  const [succ, setSucc] = useState(false);
  const [alert, setAlert] = useState("");

  const total = items.reduce((price, item) => price + item.qty * item.price, 0);
  const diorder = items.reduce(
    (name, item) =>
      name + item.name + " : " + item.qty + " x " + item.price + ", ",
    0
  );

  // trying submit
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwmGJQ99vDQrP7v3xUyGWejWoLLLQI3h8eGpvvSzsLnJkfBlxARTk6Bb_LNTTxUCfDg/exec";

  const form = document.forms["preorder-form"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !noHP || !alamat) {
      setWarn(true);
      setAlert("Lengkapi data Anda terlebih dahulu!");
      setTimeout(() => {
        setWarn(false);
      }, 3000);
    } else if (!items.length) {
      setWarn(true);
      setAlert("Pilih produk terlebih dahulu!");
      setTimeout(() => {
        setWarn(false);
      }, 3000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setSucc(false);
      }, 10000);

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log(response);
          setLoading(false);
          setSucc(true);
          setNama("");
          setNoHP("");
          setAlamat("");
          setItems([]);
        })
        .catch((error) => console.error("Error", error.message));
    }
  };

  // submit joss

  const Warning = () => {
    return (
      <div className="my-12">
        <h3 className="font-bold text-3xl mb-4">Perhatian</h3>
        <p className="italic">
          Untuk bisa masuk dalam <b>List Preorder</b>, diharuskan untuk membayar{" "}
          <b>DP minimal 50% </b>
          dari total harga.
        </p>
        <p className="italic">DP bisa ditransfer ke No Rekening BRI a/n:</p>
        <p className="italic font-bold md:text-xl">A. JAMIL HIDAYATULLAH</p>
        <p className="italic font-bold md:text-xl">0582-0102-0919-50-4</p>
        <p className="italic pt-2">Konfirmasi pembayaran via</p>
        <p className="italic font-bold text-green-800">
          <a target="blank" href="https://wa.me/6282228326870">
            WhatsApp
          </a>
        </p>
      </div>
    );
  };

  const SuccessAlert = () => {
    return (
      <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <p>Selamat!</p>
          <p>Anda berhasil masuk dalam daftar Pre Order.</p>
        </div>
        <button
          onClick={() => setSucc(false)}
          className="bg-black text-success font-bold px-2 rounded-full align-middle"
        >
          X
        </button>
      </div>
    );
  };

  const WarnAlert = ({ alert }) => {
    return (
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>{alert}</span>
        <button
          onClick={() => setWarn(false)}
          className="bg-black text-warning font-bold px-2 rounded-full align-middle"
        >
          X
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="mt-12 font-medium text-3xl">Informasi Pemesan</h3>
      {warn && <WarnAlert alert={alert} />}
      {succ && <SuccessAlert />}
      <form name="preorder-form">
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
              name="nama"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <p className="label-text text-lg font-medium">
                No. HP / WhatsApp
              </p>
            </div>
            <input
              type="text"
              placeholder="Masukkan nomor HP"
              className="input input-bordered w-full "
              onChange={(e) => setNoHP(e.target.value)}
              value={noHP}
              name="noHP"
            />
            <p className="italic font-light text-sm ml-1 pt-2">
              No. HP diawali dengan angka 62
            </p>
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
              name="alamat"
            />
          </label>
          <input
            type="text"
            readOnly
            value={total}
            name="totalHarga"
            className="hidden"
          />
          <input
            type="text"
            readOnly
            value={diorder}
            name="orderan"
            className="hidden"
          />
        </div>
        {items.length ? <Warning /> : ""}
        <button
          type="submit"
          className="btn btn-accent w-32 mb-20"
          onClick={handleSubmit}
          name="submit"
        >
          {loading ? (
            <>
              <span className="loading loading-spinner"></span>
              Loading...
            </>
          ) : (
            <p className="font-medium md:text-lg">Kirim</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default OrdererInfo;
