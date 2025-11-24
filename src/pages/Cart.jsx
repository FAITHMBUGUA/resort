import React from "react";

export default function Cart({ setPage, cart, setCart }) {
  const addItem = (item) => {
    setCart((prev) => {
      const prevQty = prev[item.name]?.qty || 0;
      return { ...prev, [item.name]: { ...item, qty: prevQty + 1 } };
    });
  };

  const removeItem = (item) => {
    setCart((prev) => {
      const prevQty = prev[item.name]?.qty || 0;
      if (prevQty <= 1) {
        const copy = { ...prev };
        delete copy[item.name];
        return copy;
      }
      return { ...prev, [item.name]: { ...item, qty: prevQty - 1 } };
    });
  };

  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <style>{`
        .cart-page {
          padding: 30px;
          background: linear-gradient(135deg, #7F00FF, #E100FF);
          min-height: 100vh;
          color: white;
        }
        .back-btn {
          background: rgba(255,255,255,0.3);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .cart-item button {
          background: white;
          color: #7F00FF;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }
      `}</style>

      <div className="cart-page">
        <button className="back-btn" onClick={() => setPage("Foods")}>← Back to Foods</button>
        <h1>Your Cart</h1>

        {Object.values(cart).length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            {Object.values(cart).map((item, i) => (
              <div key={i} className="cart-item">
                <span>{item.name} x {item.qty}</span>
                <span>
                  KES {item.price * item.qty} 
                  <button onClick={() => addItem(item)}>+</button>
                  <button onClick={() => removeItem(item)}>-</button>
                </span>
              </div>
            ))}
            <h2>Total: KES {total}</h2>
          </>
        )}
      </div>
    </>
  );
}

