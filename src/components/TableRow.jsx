import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import edit from "../assets/edit.png";
import { Link } from "react-router-dom";

const TableRow = ({ item, cart }) => {
  const { items, setItems, scrollCheckout } = useContext(StoreContext);

  const increaseItem = () => {
    const currentItem = items.find((prod) => prod.id === item.id);
    setItems(
      items.map((prod) =>
        prod.id === item.id
          ? { ...currentItem, qty: currentItem.qty + 1 }
          : prod
      )
    );
  };

  const decreaseItem = () => {
    const currentItem = items.find((prod) => prod.id === item.id);
    if (currentItem.qty === 1) {
      setItems(items.filter((prod) => prod.id !== item.id));
    } else {
      setItems(
        items.map((prod) =>
          prod.id === item.id
            ? { ...currentItem, qty: currentItem.qty - 1 }
            : prod
        )
      );
    }
  };

  const handleDelete = () => {
    setItems(items.filter((prod) => prod.id !== item.id));
  };

  return (
    <tr className="hover" key={item.id}>
      {/* col 1 */}
      <td>
        <div className="flex items-center gap-3">
          <div
            className={`${
              cart ? "hidden" : ""
            } flex items-center justify-center`}
          >
            <div className="w-10">
              <img
                src={item.image}
                alt="Avatar Tailwind CSS Component"
                className="w-fit max-h-full"
              />
            </div>
          </div>
          <div>
            <div className="font-medium text-sm ">{item.name}</div>
            <div className={`${cart ? "hidden" : "hidden md:block"}`}>
              {item.subt}
            </div>
            <div className={`md:hidden ${cart ? "block" : ""}`}>
              {item.qty} x {Number(item.price).toLocaleString()}
            </div>
          </div>
        </div>
      </td>

      {/* col 2 */}
      <td className={`align-text-top ${cart ? "hidden" : "hidden md:block"}`}>
        {Number(item.price).toLocaleString()}
      </td>

      {/* col 3 */}
      <td className={`align-text-top text-center w-28 ${cart ? "hidden" : ""}`}>
        <div className="space-y-2">
          <div>
            <button
              className="px-2 mr-2 bg-base-400 border border-slate-500 rounded hover:bg-slate-200 hover:border-gray-900"
              onClick={decreaseItem}
            >
              -
            </button>
            {item.qty}
            <button
              className="px-2 ml-2 bg-base-400 border border-slate-500 rounded hover:bg-slate-200 hover:border-gray-900"
              onClick={increaseItem}
            >
              +
            </button>
          </div>
          <button
            className="md:bg-gray-500 font-medium bg-red-800 text-white px-4 hover:bg-red-700 py-2 rounded-md"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
      </td>

      {/* col 4 */}
      <th className="align-text-top text-right">
        <div className="flex flex-col items-end gap-2">
          <p>{Number(item.qty * item.price).toLocaleString()}</p>
          <p className={`${cart ? "" : "hidden"} h-7 w-7 rounded-full bg-white flex items-center justify-center`}>
            <Link onClick={scrollCheckout} >
              <img
                className={`${cart ? "" : "hidden"}`}
                width={13}
                height={13}
                src={edit}
                alt="edit"
              />
            </Link>
          </p>
        </div>
      </th>
    </tr>
  );
};

export default TableRow;
