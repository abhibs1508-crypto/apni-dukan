import { useCart } from "../context/CartContext.jsx";
import "./Checkout.css";

export default function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        {/* LEFT: ADDRESS FORM */}
        <div className="checkout-form">
          <h2>Shipping Address</h2>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Address Line" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Pincode" />

          <button className="place-order-btn">
            Place Order
          </button>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item, index) => (
            <div className="summary-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
