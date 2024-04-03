import Contain from "./components/Contain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { StoreContext } from "./StoreContext";

function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

  const [items, setItems] = useState(itemsFromLocalStorage);
  const checkoutRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])
  

  const scrollCheckout = () => {
    window.scrollTo({
      top: checkoutRef.current.offsetTop - 100,
      behavior: "smooth"
    })
  }

  const scrollList = () => {
    window.scrollTo({
      top: listRef.current.offsetTop - 110,
      behavior: "smooth"
    })
  }
  
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

  const value = {
    items,
    setItems,
    addToCart,
    checkoutRef,
    scrollCheckout,
    listRef,
    scrollList
  };

  return (
    <div>
      <StoreContext.Provider value={value}>
        <Navbar />
        <Contain />
        <Footer />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
