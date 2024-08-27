import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/Kid";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";

function App() {
  const [alert, setAlert] = useState({ msg: "", status: "hidden" });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    console.log(product);
    if (cart.length) {
      const existingProductIndex = cart.findIndex((item) => {
        return item.id === product.id && item.size === product.size;
      });

      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].qty += product.qty;
        setCart(updatedCart);
      } else {
        setCart([...cart, product]);
      }
    } else {
      setCart([product]);
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
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men {...props} />} />
          <Route path="/Women" element={<Women {...props} />} />
          <Route path="/Kid" element={<Kid {...props} />} />
          <Route
            path="/product/:id"
            element={
              <ProductView
                handleAddToCart={handleAddToCart}
                alert={alert}
                setAlert={setAlert}
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
