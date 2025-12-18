import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/products/product1.jpeg";
import product2 from "../assets/products/product2.jpeg";
import product3 from "../assets/products/product3.jpeg";
import product4 from "../assets/products/product4.jpeg";
import "./Products.css";

const products = [
  { name: "Smartphone", price: 299, img: product1 },
  { name: "Headphones", price: 49, img: product2 },
  { name: "Sneakers", price: 79, img: product3 },
  { name: "Football", price: 29, img: product4 },
];

const Products = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Top Products</h2>
      <div className="products-grid">
        {products.map((prod) => (
          <div key={prod.name} className="product-card">
            <img src={prod.img} alt={prod.name} />
            <div className="product-info">
              <h3>{prod.name}</h3>
              <p>${prod.price}</p>
              <Link to="/cart" className="add-to-cart-btn">Add to Cart</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
