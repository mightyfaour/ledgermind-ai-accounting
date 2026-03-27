import { useState } from "react";
import API from "../assets/services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await API.post("/api/v1/transactions", {
        amount: parseFloat(amount),
        description: desc,
        businessId: 1, // Static for now, can be dynamic from current user profile
      });

      alert("Transaction added successfully!");
      setAmount("");
      setDesc("");
    } catch (err) {
      console.error("Add transaction error:", err);
      alert("Failed to add transaction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "32px", maxWidth: "600px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0f172a", marginBottom: "24px" }}>
            Add Transaction
          </h2>

          <div style={{ background: "white", padding: "32px", borderRadius: "24px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}>
            <form onSubmit={handleAdd}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#475569", marginBottom: "6px" }}>
                  Amount (₦)
                </label>
                <input 
                  type="number"
                  placeholder="e.g. 10000" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)} 
                  required
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontSize: "15px", outline: "none"
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#475569", marginBottom: "6px" }}>
                  Description
                </label>
                <input 
                  placeholder="What was this for?" 
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)} 
                  required
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontSize: "15px", outline: "none"
                  }}
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                style={{
                  width: "100%", padding: "14px", background: "#0f172a", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: "600", cursor: "pointer"
                }}
              >
                {isLoading ? "Adding..." : "Add Transaction"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}