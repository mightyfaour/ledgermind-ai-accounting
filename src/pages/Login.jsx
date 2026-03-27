
// import { useState } from "react";
// import API from "../assets/services/api";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const nav = useNavigate();

//   const login = async () => {
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       nav("/dashboard");
//     } catch {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "100px" }}>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={login}>Login</button>
//     </div>
//   );
// }
import { useState } from "react";
import API from "../assets/services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("POST /api/v1/users/login/", { email, password });
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      
      {/* LEFT SIDE */}
      <div className="left">
        <h1>LedgerMind</h1>
        <p>Financial Intelligence Platform</p>

        <div className="feature">
          <h3>📈 Cashflow Prediction</h3>
          <p>AI-powered forecasts for smarter decisions</p>
        </div>

        <div className="feature">
          <h3>📊 Smart Categorization</h3>
          <p>Automatic expense classification</p>
        </div>

        <div className="feature">
          <h3>🛡 Credit Readiness</h3>
          <p>Know your business loan-readiness score</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">
          <h2>Welcome back</h2>
          <p>Sign in to your account</p>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Sign In</button>

          {/* <p className="signup">
            Don't have an account? <span>Sign up</span>
          </p> */}
          <p className="signup">
              Don't have an account?{" "}
              <span onClick={() => nav("/signup")}>Sign up</span>
          </p>
        </div>
      </div>

    </div>
  );
}