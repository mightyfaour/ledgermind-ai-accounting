export default function Card({ title, value }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}