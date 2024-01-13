import Summary from "./Summary";

const CartBody = ({ totalItem }) => {
  const cart = true;

  return (
    <div>
      <p className="font-bold text-lg">{totalItem} Barang</p>
      <Summary cart={cart} />
      <p className="font-medium">Subtotal: Rp 100.000,-</p>
    </div>
  );
};

export default CartBody;
