import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        Apni<span>Dukan</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>
        <NavLink to="/help" onClick={() => setMenuOpen(false)}>Help</NavLink>
        <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
      </nav>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
