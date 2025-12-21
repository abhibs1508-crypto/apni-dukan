import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./ProductDetail.css";

import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoes.jpeg";

const PRODUCTS = {
  1: {
    name: "Smart Phone",
    price: 15999,
    image: phone,
    desc: "High performance smartphone with AMOLED display and long battery life."
  },
  2: {
    name: "Laptop Pro",
    price: 58999,
    image: laptop,
    desc: "Powerful laptop for coding, gaming and professional work."
  },
  3: {
    name: "Smart Watch",
    price: 4999,
    image: watch,
    desc: "Track fitness, heart rate and notifications in style."
  },
  4: {
    name: "Running Shoes",
    price: 2999,
    image: shoes,
    desc: "Lightweight and durable shoes for daily workouts."
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = PRODUCTS[id];
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.desc}</p>

        <button onClick={() => addToCart({ id, ...product })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
