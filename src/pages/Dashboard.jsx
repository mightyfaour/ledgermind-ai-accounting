import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  // Protect route
  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      nav("/");
    }
  }, []);

  // Chart data
  const data = [
    { name: "Food", value: 400 },
    { name: "Transport", value: 300 },
  ];

  // UI MUST be inside component
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <Card title="Income" value="₦500,000" />
          <Card title="Expenses" value="₦200,000" />
          <Card title="Profit" value="₦300,000" />
        </div>

        <Chart data={data} />
      </div>
    </div>
  );
}