import Contain from "./components/Contain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [totalItem, setTotalItem] = useState(0);

  return (
    <>
      <Navbar totalItem={totalItem}/>
      <Contain setTotalItem={setTotalItem} />
      <Footer />
    </>
  )
}

export default App
