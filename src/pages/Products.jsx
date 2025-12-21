import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Products.css";

import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoes.jpeg";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Smart Phone",
    price: 15999,
    category: "electronics",
    image: phone,
    desc: "AMOLED display • Fast charging"
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 58999,
    category: "electronics",
    image: laptop,
    desc: "Powerful • Lightweight • SSD"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4999,
    category: "wearables",
    image: watch,
    desc: "Fitness • Heart-rate • GPS"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2999,
    category: "fashion",
    image: shoes,
    desc: "Comfort • Grip • Style"
  }
];

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const filteredProducts = ALL_PRODUCTS
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page">
      <h1 className="products-title">Explore Products</h1>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          <button onClick={() => setCategory("all")} className={category === "all" ? "active" : ""}>All</button>
          <button onClick={() => setCategory("electronics")} className={category === "electronics" ? "active" : ""}>Electronics</button>
          <button onClick={() => setCategory("wearables")} className={category === "wearables" ? "active" : ""}>Wearables</button>
          <button onClick={() => setCategory("fashion")} className={category === "fashion" ? "active" : ""}>Fashion</button>
        </div>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="card-content">
              <h3>{product.name}</h3>
              <p className="desc">{product.desc}</p>
              <p className="price">₹{product.price}</p>

              <div className="card-actions">
                <button
                  className="view-btn"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  View
                </button>

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
}
