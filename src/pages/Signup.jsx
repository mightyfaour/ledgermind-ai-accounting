import { useState } from "react";
import API from "../assets/services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Signup() {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      await API.post("/api/v1/users/register/", {
        email: form.email,
        first_name: form.first_name,
        last_name: form.last_name,
        phone_number: form.phone_number,
        password: form.password,
        password_confirm: form.confirmPassword,
      });

      // Show success and move to login
      alert("Account created successfully!");
      nav("/");
    } catch (err) {
      console.error("Signup error details:", err.response?.data);
      // Construct a readable error string from nested backend objects
      const detail = err.response?.data?.error?.message || 
                     err.response?.data?.detail || 
                     err.message || 
                     "Registration failed. Please try again.";
      setError(detail);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* LEFT SIDE: Same style as Login for consistency */}
      <div className="left">
        <h1>LedgerMind</h1>
        <p className="subtitle">Join thousands of businesses who trust AI to manage their accounts.</p>
        
        <div className="feature">
          <h3>✅ Hassle-free Integration</h3>
          <p>Connect your existing financial flows with our intelligent automation suite.</p>
        </div>

        <div className="feature">
          <h3>🚀 Scale Faster</h3>
          <p>Get data-driven insights to make informed expansion decisions with confidence.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Signup Card */}
      <div className="right">
        <div className="card">
          <h2>Create account</h2>
          <p className="signin-text">Start your financial intelligence journey</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleRegister}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="input-group">
                <label>First Name</label>
                <input 
                  name="first_name" 
                  placeholder="E.g. John" 
                  onChange={handleChange} 
                  required 
                  disabled={isLoading} 
                />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input 
                  name="last_name" 
                  placeholder="E.g. Doe" 
                  onChange={handleChange} 
                  required 
                  disabled={isLoading} 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input 
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                onChange={handleChange} 
                required 
                disabled={isLoading} 
              />
            </div>

            <div className="input-group">
              <label>Phone Number (Optional)</label>
              <input 
                name="phone_number" 
                placeholder="+234..." 
                onChange={handleChange} 
                disabled={isLoading} 
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                name="password" 
                type="password" 
                placeholder="Secure password" 
                onChange={handleChange} 
                required 
                disabled={isLoading} 
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input 
                name="confirmPassword" 
                type="password" 
                placeholder="Repeat password" 
                onChange={handleChange} 
                required 
                disabled={isLoading} 
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="signup-prompt">
            Already have an account?{" "}
            <span onClick={() => nav("/")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}