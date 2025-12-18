import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

import logoSmall from "../assets/logo-small.png";
import logoLong from "../assets/logo-long.png";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoLong} alt="Apni Dukan" className="long-logo" />
          <img src={logoSmall} alt="Apni Dukan" className="small-logo" />
        </Link>

        <ul className="navbar-menu">
          {["Home", "Shop", "Categories", "Contact"].map((item) => (
            <li key={item}>
              <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={22} />
            <span className="cart-badge">0</span>
          </Link>

          <Link to="/login" className="login-btn">
            <User size={18} />
            Login
          </Link>

          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          {["Home", "Shop", "Categories", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="mobile-login">
            <User size={18} />
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
