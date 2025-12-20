import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const {
    cartItems,
    updateQty,
    removeFromCart,
    cartTotal,
    openDrawer,
    setOpenDrawer,
  } = useCart();

  return (
    <>
      {openDrawer && <div className="overlay" onClick={() => setOpenDrawer(false)}></div>}
      <div className={`cart-drawer ${openDrawer ? "open" : ""}`}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 && <p>Cart is empty</p>}

        {cartItems.map((item) => (
          <div className="drawer-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
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

        <h3>Total: ₹{cartTotal}</h3>
        <Link to="/cart" onClick={() => setOpenDrawer(false)}>Go to Cart</Link>
      </div>
    </>
  );
}
