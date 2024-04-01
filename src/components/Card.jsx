import { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";
import Alert from "./Alert";

const Card = ({ product }) => {
  const { items, addToCart } = useContext(StoreContext);
  const [alert, setAlert] = useState(false)

  const current = items.find(prod => prod.id === product.id)
  
  const handleAddCart = () => {
    addToCart(product);
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 5000);
  };

  return (
    <div className="indicator">
      <div className="card w-72 sm:w-44 mb-2 md:w-80 bg-base-300 shadow-xl">
        <div className="h-40 md:h-80 flex items-center justify-center">
          <figure className="px-3 pt-3 h-full">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md max-h-full"
            />
          </figure>
        </div>
        <div className="card-body p-4 text-sm md:text-lg flex flex-col md:flex-row justify-between">
          <div className="h-28">
            <h2 className="card-title text-sm mb-1 md:mb-3">{product.name}</h2>
            <p className="text-sm">{product.desc}</p>
            <p className="text-sm">{product.subt}</p>
            <p className="font-medium mt-2">
              Rp {Number(product.price).toLocaleString()}
            </p>
          </div>
          <div className="card-actions flex rounded-lg">
            <button className="btn btn-accent w-full" onClick={handleAddCart}>
            <p className="px-3 md:hidden">Tambahkan</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {current ? (
        <span className="badge badge-accent badge-lg indicator-item">
          {current.qty}
        </span>
      ) : (
        ""
      )}

      {alert && <Alert/>}
    </div>
  );
};

export default Card;
