import Contain from "./components/Contain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { StoreContext } from "./StoreContext";

function App() {
  const [totalItem, setTotalItem] = useState(0);
  const [items, setItems] = useState([]);

  const addToCart = (data) => {
    setItems((prevState) => [...prevState,  data ]);
  };

  return (
    <div>
      <StoreContext.Provider value={{items, addToCart}}>
        <Navbar totalItem={totalItem} />
        <Contain setTotalItem={setTotalItem} />
        <Footer />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
