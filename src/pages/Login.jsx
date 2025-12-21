import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login to continue shopping</p>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button className="auth-btn">Login</button>

        <span className="auth-link">
          New user? <Link to="/register">Create account</Link>
        </span>
      </div>
    </div>
  );
}
