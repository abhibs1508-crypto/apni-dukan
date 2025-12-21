import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// hero images
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

// category images
import electronics from "../assets/electronics.jpeg";
import fashion from "../assets/fashion.jpeg";
import grocery from "../assets/grocery.jpeg";

// products
import p1 from "../assets/product1.jpeg";
import p2 from "../assets/product2.jpeg";
import p3 from "../assets/product3.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const heroImages = [hero1, hero2, hero3];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-root">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
      >
        <div className="hero-overlay">
          <h1>Apni Dukan</h1>
          <p>India’s Smartest Online Shopping Experience</p>
          <button onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          <div onClick={() => navigate("/products")} className="category-card">
            <img src={electronics} alt="Electronics" />
            <span>Electronics</span>
          </div>
          <div onClick={() => navigate("/products")} className="category-card">
            <img src={fashion} alt="Fashion" />
            <span>Fashion</span>
          </div>
          <div onClick={() => navigate("/products")} className="category-card">
            <img src={grocery} alt="Grocery" />
            <span>Grocery</span>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {[p1, p2, p3].map((img, i) => (
            <div className="product-card" key={i}>
              <img src={img} alt="product" />
              <h3>Premium Product</h3>
              <p>High quality product with best price</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
