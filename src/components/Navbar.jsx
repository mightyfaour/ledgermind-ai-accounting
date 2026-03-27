import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access"); // Clear the token
    navigate("/"); // Redirect to login
  };

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "16px 32px", 
      background: "#ffffff", 
      borderBottom: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h2 style={{ margin: 0, color: "#0f172a", fontSize: "20px", fontWeight: "700" }}>
           LedgerMind
        </h2>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button 
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            background: "#f1f5f9",
            color: "#475569",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => { e.target.style.background = "#e2e8f0"; e.target.style.color = "#0f172a"; }}
          onMouseOut={(e) => { e.target.style.background = "#f1f5f9"; e.target.style.color = "#475569"; }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}