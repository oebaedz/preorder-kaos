import { useContext } from "react";
import { StoreContext } from "../StoreContext";

const Alert = () => {
  const { scrollCheckout } = useContext(StoreContext);

  return (
    <div className="toast toast-center z-40">
      <div className="hidden md:block">
        <div role="alert" className="alert bg-cyan-100 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Produk ditambahkan!</h3>
            <div className="text-sm">Lanjut Check Out?</div>
          </div>
          <button onClick={scrollCheckout} className="btn px-5 btn-accent btn-sm">
            Ya
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex w-full gap-8 px-6 mb-3 py-3 border rounded-2xl bg-cyan-100 items-center">
          <h3 className="font-medium">Lanjut check out?</h3>
          <button onClick={scrollCheckout} className="btn px-5 btn-accent btn-sm">
            Ya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
