import Contain from "./components/Contain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useCart } from "react-use-cart";

function App() {
  const [totalItem, setTotalItem] = useState(0);
  const {CartProvider} = useCart();

  return (
    <>
      {/* <CartProvider> */}
        <Navbar totalItem={totalItem} />
        <Contain setTotalItem={setTotalItem} />
        <Footer />
      {/* </CartProvider> */}
    </>
  );
}

export default App;
