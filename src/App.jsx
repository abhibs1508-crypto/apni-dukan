import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
// import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";



export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar openCart={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} closeCart={() => setCartOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} />
         */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />


      </Routes>
    </>
  );
}
