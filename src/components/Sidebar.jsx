import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#1c3b5a", color: "white", height: "100vh", padding: "20px" }}>
      <h3>Menu</h3>
      <p><Link to="/dashboard">Dashboard</Link></p>
      <p><Link to="/transactions">Transactions</Link></p>
      <p><Link to="/add">Add Transaction</Link></p>
    </div>
  );
}