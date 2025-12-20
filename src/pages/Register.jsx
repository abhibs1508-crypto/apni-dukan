import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Create Account</button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
