import { useEffect, useState } from "react";
import API from "../assets/services/api";

export default function Transactions() {
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    API.get("/transactions/1").then((res) => setTxs(res.data));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      {txs.map((t) => (
        <div key={t.id}>
          {t.description} - ₦{t.amount} ({t.category})
        </div>
      ))}
    </div>
  );
}