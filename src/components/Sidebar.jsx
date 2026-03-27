import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: "📊" },
    { title: "Transactions", path: "/transactions", icon: "💸" },
    { title: "Add Transaction", path: "/add", icon: "➕" },
  ];

  const sidebarStyle = {
    width: "280px",
    background: "#0f172a",
    color: "#94a3b8",
    height: "100vh",
    padding: "32px 16px",
    boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "relative",
    zIndex: 10
  };

  const navItemStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "12px",
    textDecoration: "none",
    color: isActive ? "#ffffff" : "#94a3b8",
    background: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
    fontWeight: "600",
    fontSize: "15px",
    transition: "all 0.2s ease"
  });

  return (
    <div style={sidebarStyle}>
      <div style={{ padding: "0 16px", marginBottom: "32px" }}>
        <h3 style={{ margin: 0, color: "#ffffff", fontSize: "24px", fontWeight: "800", letterSpacing: "-0.01em" }}>Menu</h3>
      </div>
      
      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.title} 
              to={item.path} 
              style={navItemStyle(isActive)}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Footer / App Name (Optional) */}
      <div style={{ marginTop: "auto", padding: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>LedgerMind v1.0</p>
      </div>
    </div>
  );
}