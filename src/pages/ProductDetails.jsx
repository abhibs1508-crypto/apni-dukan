import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./ProductDetail.css";

// Import product images
import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoes.jpeg";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    { id: "1", title: "Smart Phone", price: 15999, image: phone, description: "High performance AMOLED display, long battery life, fast charging." },
    { id: "2", title: "Laptop Pro", price: 58999, image: laptop, description: "Powerful laptop for work, gaming, and creativity with SSD storage." },
    { id: "3", title: "Smart Watch", price: 4999, image: watch, description: "Premium fitness tracking, sleep monitoring, notifications, and long battery." },
    { id: "4", title: "Running Shoes", price: 2999, image: shoes, description: "Comfortable, lightweight running shoes for everyday workouts." },
  ];

  const product = products.find((p) => p.id === id);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>

          <div className="product-detail-buttons">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => navigate("/cart")}>Go to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
