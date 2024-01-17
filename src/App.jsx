import Contain from "./components/Contain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { StoreContext } from "./StoreContext";

function App() {
  const [items, setItems] = useState([]);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");

  const addToCart = (data) => {
    const existing = items.find((item) => item.id === data.id);
    if (existing) {
      setItems(
        items.map((item) =>
          item.id === data.id ? { ...existing, qty: existing.qty + 1 } : item
        )
      );
    } else {
      setItems((prevState) => [...prevState, { ...data, qty: 1 }]);
    }
  };

  const value={
    items,
    setItems,
    addToCart,
    nama,
    setNama,
    noHP,
    setNoHP,
    alamat,
    setAlamat,
  }

  return (
    <div>
      <StoreContext.Provider
        value={value}
      >
        <Navbar />
        <Contain />
        <Footer />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
