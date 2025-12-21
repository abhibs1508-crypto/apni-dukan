import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join us for a better shopping experience</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="auth-btn">Register</button>

        <span className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}
