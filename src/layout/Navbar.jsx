import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">Apni Dukan</div>

        {/* Desktop Links */}
        <div className={`nav-links ${mobileMenu ? "active" : ""}`}>
          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/products" onClick={() => setMobileMenu(false)}>Products</Link>
          <Link to="/cart" onClick={() => setMobileMenu(false)}>Cart</Link>
          <Link to="/login" onClick={() => setMobileMenu(false)}>Login</Link>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? "✖" : "☰"}
        </div>

        {/* Cart Drawer Icon */}
        <div className="cart-icon" onClick={() => setDrawerOpen(!drawerOpen)}>
          🛒 <span className="cart-count">{totalItems}</span>
        </div>
      </div>

      {/* Cart Drawer */}
      {drawerOpen && (
        <div className="cart-drawer">
          <h3>Your Cart</h3>
          {cartItems.length === 0 && <p>Cart is empty</p>}
          {cartItems.map((item) => (
            <div key={item.id} className="drawer-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Qty: {item.quantity}</p>
                <span>₹{item.price * item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <Link to="/cart">
              <button className="go-cart">Go to Cart</button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
