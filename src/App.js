import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/Kid";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState({ msg: "", status: "hidden" });

  const handleAddToCart = (product) => {
    if (cart.length) {
      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].qty++;
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, qty: 1 }]);
      }
    } else {
      setCart([{ ...product, qty: 1 }]);
    }

    setAlert({ msg: "Product Added to Cart!!", status: "" });
  };

  const [selectedGender, setSelectedGender] = useState("");

  const props = {
    selectedGender,
    setGender: setSelectedGender,
    handleAddToCart,
    alert,
    setAlert,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men {...props} />} />
          <Route path="/Women" element={<Women {...props} />} />
          <Route path="/Kid" element={<Kid {...props} />} />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
