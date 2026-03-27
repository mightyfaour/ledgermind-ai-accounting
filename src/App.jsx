// import Login from "./pages/login";
// import "./index.css";

// function App() {
//   return <Login />;
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Signup from "./pages/Signup";

function App() {
  return (
    // <h1>App is working 🚀</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;