import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Products.css";
import productsData from "../data/products.jsx";

export default function Products() {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") || "all";

  const [category, setCategory] = useState(urlCategory);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts = productsData.filter((product) => {
    const matchCategory =
      category === "all" || product.category === category;
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="products-page">

      {/* HEADER */}
      <div className="products-header">
        <h1>
          Explore <span>Products</span>
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="filters">
        {["all", "electronics", "fashion", "grocery"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>₹{product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products found</p>
      )}
    </div>
  );
}
