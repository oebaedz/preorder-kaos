import { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";
import { Link } from "react-router-dom";

const OrdererInfo = () => {
  const { items, setItems } = useContext(StoreContext);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);
  const [warn, setWarn] = useState(false);
  const [succ, setSucc] = useState(false);
  const [alert, setAlert] = useState("");
  const [noHPWarning, setNoHPWarning] = useState(false);


  const total = items.reduce((price, item) => price + item.qty * item.price, 0);
  const diorder = items.reduce(
    (name, item) =>
      name + item.name + " : " + item.qty + " x " + item.price + ",",
    ""
  );

  // trying submit
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwmGJQ99vDQrP7v3xUyGWejWoLLLQI3h8eGpvvSzsLnJkfBlxARTk6Bb_LNTTxUCfDg/exec";

  const form = document.forms["preorder-form"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !noHP || !alamat) {
      setWarn(true);
      setAlert("Lengkapi data Anda!");
      setTimeout(() => {
        setWarn(false);
      }, 7000);
    } else if (!items.length) {
      setWarn(true);
      setAlert("Pilih produk dulu!");
      setTimeout(() => {
        setWarn(false);
      }, 7000);
    } else {
      setLoading(true);

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log(response);
          setLoading(false);
          setSucc(true);
          setTimeout(() => {
            setSucc(false);
          }, 30000);
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
          Dianggap masuk <b>LIST ORDER</b>, jika membayar{" "}
          <b>LUNAS.</b>
        </p>
        <p className="italic">Pembayaran bisa ditransfer ke No Rekening BRI a/n:</p>
        <p className="italic font-bold md:text-xl">A. JAMIL HIDAYATULLAH</p>
        <p className="italic font-bold md:text-xl">0582-0102-0919-50-4</p>
        <p className="italic pt-2">Konfirmasi pembayaran via <span className="italic font-bold text-green-800">
          <Link target="blank" to="https://wa.me/6282228326870">
            WhatsApp
          </Link>
        </span>
        </p>
      </div>
    );
  };

  const SuccessAlert = () => {
    return (
      <div role="alert" className="alert alert-success mb-10 flex flex-row items-center">
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
          <p>Selamat! Pesanan Anda terkirim.</p>
          <p>Jangan lupa bayar LUNAS, agar masuk <b>LIST ORDER</b>.</p>
        </div>
        <button
          onClick={() => setSucc(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </button>
      </div>
    );
  };

  const WarnAlert = ({ alert }) => {
    return (
      <div role="alert" className="alert alert-warning mb-10 flex flex-row justify-between">
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
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="mt-12 font-medium text-3xl">Informasi Pemesan</h3>
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
    <p className="label-text text-lg font-medium">No. HP / WhatsApp</p>
  </div>
  <div className="flex w-full">
    <span className="flex items-center px-3 border border-gray-300 bg-gray-100 rounded-l-md text-sm">
      +62
    </span>
    <input
      type="text"
      placeholder="812xxxxxxx"
      className="input input-bordered w-full rounded-l-none"
      onChange={(e) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val.startsWith("0")) {
          setNoHPWarning(true);
          val = val.slice(1);
        } else {
          setNoHPWarning(false);
        }
        if (val.length <= 13) {
          setNoHP(val);
        }
      }}
      value={noHP}
      name="noHP"
    />
  </div>
  {noHPWarning && (
    <p className="text-sm text-red-600 mt-1">
      Awalan "0" otomatis dihapus. Gunakan format tanpa 0, contoh: 812xxxxxxx
    </p>
  )}
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
        {warn && <WarnAlert alert={alert} />}
        {succ && <SuccessAlert />}
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
