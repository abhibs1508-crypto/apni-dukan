import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  { name: "Electronics", img: "https://via.placeholder.com/300x180?text=Electronics" },
  { name: "Fashion", img: "https://via.placeholder.com/300x180?text=Fashion" },
  { name: "Grocery", img: "https://via.placeholder.com/300x180?text=Grocery" },
  { name: "Sports", img: "https://via.placeholder.com/300x180?text=Sports" },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <Link
            to={`/categories/${cat.name.toLowerCase()}`}
            key={cat.name}
            className="category-card"
          >
            <img src={cat.img} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
