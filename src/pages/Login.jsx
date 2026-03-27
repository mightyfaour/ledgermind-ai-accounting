import { useState } from "react";
import API from "../assets/services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await API.post("/api/v1/users/login/", { email, password });
      
      // Axios success: response returns tokens
      if (res.data && res.data.access) {
        localStorage.setItem("access", res.data.access);
        nav("/dashboard");
      } else {
        throw new Error("Invalid response structure from server.");
      }
    } catch (err) {
      console.error("Login detail:", err);
      const detail = err.response?.data?.details?.detail || err.response?.data?.message || err.message || "Invalid credentials. Please try again.";
      setError(detail);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* LEFT SIDE: Brand & Value Prop */}
      <div className="left">
        <h1>LedgerMind</h1>
        <p className="subtitle">Your AI-Powered Financial Co-pilot</p>

        <div className="feature">
          <h3>📈 Cashflow Prediction</h3>
          <p>Harness advanced AI to forecast your business liquidity and stay ahead of the curve.</p>
        </div>

        <div className="feature">
          <h3>📊 Smart Categorization</h3>
          <p>Automate your bookkeeping with intelligent transaction labels and spend analysis.</p>
        </div>

        <div className="feature">
          <h3>🛡 Credit Readiness</h3>
          <p>Analyze your financials to understand and improve your loan-readiness score.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form */}
      <div className="right">
        <div className="card">
          <h2>Welcome back</h2>
          <p className="signin-text">Log in to manage your finances</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="signup-prompt">
            Don't have an account? 
            <span onClick={() => nav("/signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}