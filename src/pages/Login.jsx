import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Sign in</h1>
          <p>Welcome back to Apni Dukan</p>
        </div>

        <form className="login-form">
          <div className="form-field">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <div className="login-footer">
          <span>New to Apni Dukan?</span>
          <a href="/register">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
