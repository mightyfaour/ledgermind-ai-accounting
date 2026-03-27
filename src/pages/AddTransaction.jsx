import { useState } from "react";
import API from "../assets/services/api";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const add = async () => {
    await API.post("/transactions", {
      amount: parseFloat(amount),
      description: desc,
      businessId: 1,
    });

    alert("Added!");
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  );
}