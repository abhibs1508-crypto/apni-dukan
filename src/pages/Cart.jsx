import { useCart } from "../context/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { cartItems, updateQty, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <div className="qty">
              <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{cartTotal}</h2>
    </div>
  );
}
