import { useEffect, useState } from "react";
import API from "../assets/services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Transactions() {
  const [txs, setTxs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("/api/v1/transactions/1") // Assuming business ID 1 for now
      .then((res) => {
        setTxs(res.data);
      })
      .catch((err) => {
        console.error("Fetch transactions error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "32px", maxWidth: "1200px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0f172a", marginBottom: "24px" }}>
            Transactions
          </h2>

          {isLoading ? (
            <p>Loading transactions...</p>
          ) : (
            <div style={{ background: "white", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "#f1f5f9", color: "#475569", fontSize: "14px", fontWeight: "600" }}>
                    <th style={{ padding: "16px" }}>Description</th>
                    <th style={{ padding: "16px" }}>Amount</th>
                    <th style={{ padding: "16px" }}>Category</th>
                    <th style={{ padding: "16px" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {txs.length > 0 ? (
                    txs.map((t) => (
                      <tr key={t.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <td style={{ padding: "16px", color: "#0f172a" }}>{t.description}</td>
                        <td style={{ padding: "16px", fontWeight: "600", color: "#0f172a" }}>₦{t.amount.toLocaleString()}</td>
                        <td style={{ padding: "16px" }}>
                          <span style={{ padding: "4px 12px", borderRadius: "20px", background: "#ecfdf5", color: "#059669", fontSize: "12px", fontWeight: "600" }}>
                            {t.category || "General"}
                          </span>
                        </td>
                        <td style={{ padding: "16px", color: "#64748b", fontSize: "14px" }}>Completed</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ padding: "32px", textAlign: "center", color: "#64748b" }}>
                        No transactions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}