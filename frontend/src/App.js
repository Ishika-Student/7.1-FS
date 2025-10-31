 // === FRONTEND CODE ===
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to fetch products. Try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🛒 Product List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "80%",
          margin: "20px auto",
        }}
      >
        {products.map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{p.name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

