import React, { useState, useEffect } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading items...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Items</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>

          <p>Price: {item.price}</p>

          <img
            src={item.picture}
            alt={item.name}
            width="200"
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;