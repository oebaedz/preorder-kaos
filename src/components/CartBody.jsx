import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import Summary from "./Summary";
import empty from "../assets/empty-cart.png";

const CartBody = () => {
  const { items, scrollCheckout } = useContext(StoreContext);
  
  const cart = true;
  const totItems = items.reduce((qty, item) => qty + item.qty,0)

  return !items.length ? (
    <div>
      <p className="font-bold text-sm pt-3 text-center">Keranjang Anda kosong</p>
      <div className="py-10 flex justify-center">
        <img src={empty} alt="empty" />
      </div>
    </div>
  ) : (
    <div>
      <p className="font-bold text-lg text-center pt-3">Keranjang Anda</p>
      <p className="font-light text-sm text-center pb-2">{totItems} barang ditambahkan</p>
      <hr />
      <Summary cart={cart} />
      <div className="flex justify-center">
        <button onClick={scrollCheckout} className="btn btn-accent w-full">
          <Link to='/'>Check Out</Link>
        </button>
      </div>
    </div>
  );
};

export default CartBody;
