import { useState } from "react";
import API from "../assets/services/api";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Signup() {
  const nav = useNavigate();

  // Correct state (matches backend)
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register function
  const register = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/api/v1/users/register/", {
        email: form.email,
        first_name: form.first_name,
        last_name: form.last_name,
        phone_number: form.phone_number,
        password: form.password,
        password_confirm: form.confirmPassword,
      });

      console.log(res.data);
      alert("Account created successfully");
      nav("/");
    } catch (err) {
      console.error(err.response?.data);
      alert(JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <h1>LedgerMind</h1>
        <p>Financial Intelligence Platform</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">
          <h2>Create account</h2>

          <input name="first_name" placeholder="First Name" onChange={handleChange} />
          <input name="last_name" placeholder="Last Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone_number" placeholder="Phone Number" onChange={handleChange} />

          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Retype Password" onChange={handleChange} />

          <button onClick={register}>Sign Up</button>

          <p className="signup">
            Already have an account?{" "}
            <span onClick={() => nav("/")}>Login</span>
          </p>
        </div>
      </div>

    </div>
  );
}