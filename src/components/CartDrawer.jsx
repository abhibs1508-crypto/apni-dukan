import { useCart } from "../context/CartContext.jsx";
import "./CartDrawer.css";

export default function CartDrawer({ isOpen, closeCart }) {
  const { cart, removeFromCart } = useCart();

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={closeCart}>✖</button>
      </div>

      {cart.length === 0 && <p className="empty">Cart is empty</p>}

      {cart.map((item, index) => (
        <div className="drawer-item" key={index}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
