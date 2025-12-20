import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Home.css";

// HERO IMAGES
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

// CATEGORY IMAGES
import electronics from "../assets/electronics.jpeg";
import fashion from "../assets/fashion.jpeg";
import grocery from "../assets/grocery.jpeg";

// PRODUCT IMAGES
import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoes.jpeg";

export default function Home() {
  const heroImages = [hero1, hero2, hero3];
  const [currentHero, setCurrentHero] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
      >
        <div className="hero-overlay">
          <h1>
            India’s <span>Smartest</span> Shopping Platform
          </h1>
          <p>Electronics • Fashion • Daily Needs</p>
          <button
            className="hero-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2 className="section-title">Shop by Category</h2>

        <div className="category-grid">
          <div
            className="category-card"
            onClick={() => navigate("/products?category=electronics")}
          >
            <img src={electronics} alt="Electronics" />
            <button>Electronics</button>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/products?category=fashion")}
          >
            <img src={fashion} alt="Fashion" />
            <button>Fashion</button>
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/products?category=grocery")}
          >
            <img src={grocery} alt="Grocery" />
            <button>Grocery</button>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">
        <h2 className="section-title">Featured Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src={phone} alt="Phone" />
            <h3>Smart Phone</h3>
            <p>High performance AMOLED display</p>
            <span>₹15,999</span>
            <button onClick={() => addToCart({ id: 1, title: "Smart Phone", price: 15999, image: phone })}>
              Add to Cart
            </button>
          </div>

          <div className="product-card">
            <img src={laptop} alt="Laptop" />
            <h3>Laptop Pro</h3>
            <p>Powerful laptop for work</p>
            <span>₹58,999</span>
            <button onClick={() => addToCart({ id: 2, title: "Laptop Pro", price: 58999, image: laptop })}>
              Add to Cart
            </button>
          </div>

          <div className="product-card">
            <img src={watch} alt="Watch" />
            <h3>Smart Watch</h3>
            <p>Premium fitness tracking</p>
            <span>₹4,999</span>
            <button onClick={() => addToCart({ id: 3, title: "Smart Watch", price: 4999, image: watch })}>
              Add to Cart
            </button>
          </div>

          <div className="product-card">
            <img src={shoes} alt="Shoes" />
            <h3>Running Shoes</h3>
            <p>Comfortable & lightweight</p>
            <span>₹2,999</span>
            <button onClick={() => addToCart({ id: 4, title: "Running Shoes", price: 2999, image: shoes })}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
