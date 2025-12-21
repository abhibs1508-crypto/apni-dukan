import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const navigate = useNavigate();

  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <button
  onClick={() => navigate("/checkout")}
  className="checkout-btn"
>
  Proceed to Checkout
</button>

        </div>
      ))}
    </div>
  );
}
