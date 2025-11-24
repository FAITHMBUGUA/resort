import React, { useState } from "react";

export default function Foods({ setPage, cart, setCart }) {
  const meals = [
    { name: "Grilled Chicken", price: 1200, image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
    { name: "Beef Steak", price: 1500, image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" },
    { name: "Pasta Carbonara", price: 900, image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" },
     {
    name: "Seafood",
    price: 800, 
    image: "/images/side-view-fried-shrimps-sauce-with-tomatoes-herbs.jpg"
  },
    { name: "Vegan Salad", price: 700, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
  ];

const drinks = [
    {
    name: "Mojito",
    price: 500,
    image: "/images/kiwi-alcohol-cocktail-with-fruit-slices-green-pipe.jpg"
  },
  { 
    name: "Cappuccino", 
    price: 350, 
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
  },
  { 
    name: "Fresh Juice", 
    price: 300, 
    image: "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg" 
  },
   { 
    name: "Red Cocktail", 
    price: 600, 
    image: "/images/glass-red-alcohol-cocktail-with-lime-slice-cherry.jpg" 
  }
,
  { 
    name: "coffee", 
    price: 200, 
    image: "/images/cup-coffee-shot-tequilla.jpg"  
  }
];

  

  const [toast, setToast] = useState("");

  const handleAdd = (item) => {
    setCart(prev => {
      const prevQty = prev[item.name]?.qty || 0;
      return { ...prev, [item.name]: { ...item, qty: prevQty + 1 } };
    });
    setToast(`${item.name} added to cart!`);
    setTimeout(() => setToast(""), 2000);
  };

  const handleRemove = (item) => {
    setCart(prev => {
      const prevQty = prev[item.name]?.qty || 0;
      if(prevQty <= 1){
        const copy = { ...prev };
        delete copy[item.name];
        return copy;
      }
      return { ...prev, [item.name]: { ...item, qty: prevQty - 1 } };
    });
    setToast(`${item.name} removed from cart!`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <>
      <style>{`
        .page-container { padding:30px; color:white; background-color:#1E3A8A; min-height:100vh; position:relative;}
        .back-btn { background: rgba(255,255,255,0.3); color:white; padding:10px 20px; border:none; border-radius:8px; cursor:pointer; margin-bottom:20px;}
        .cart-icon { position:fixed; top:20px; right:20px; font-size:28px; cursor:pointer; background:rgba(255,255,255,0.2); padding:10px 15px; border-radius:50%; }
        .toast { position:fixed; top:70px; right:20px; background:#22c55e; color:white; padding:10px 15px; border-radius:8px; font-weight:bold; }
        .section-title { text-align:center; margin-top:20px; margin-bottom:15px; font-size:24px; }
        .page-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; }
        .glass-card2 { background: rgba(255,255,255,0.15); padding:20px; border-radius:12px; width:250px; backdrop-filter:blur(6px); text-align:center; transition:transform 0.3s; }
        .glass-card2 img { width:100%; height:160px; object-fit:cover; border-radius:10px; margin-bottom:10px; }
        .card-buttons { display:flex; justify-content:center; align-items:center; gap:10px; margin-top:10px; }
        .card-buttons button { padding:6px 12px; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition:background 0.3s; }
        .add-btn { background:#3B82F6; color:white; } .add-btn:hover { background:orange; }
        .remove-btn { background:#EF4444; color:white; } .remove-btn:hover { background:darkred; }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage("dashboard")}>← Back</button>
        <div className="cart-icon" onClick={() => setPage("Cart")}>🛒</div>
        {toast && <div className="toast">{toast}</div>}

        <h1>Food & Drinks</h1>

        <h2 className="section-title">Meals</h2>
        <div className="page-grid">
          {meals.map((meal, i) => {
            const qty = cart[meal.name]?.qty || 0;
            const total = qty * meal.price;
            return (
              <div key={i} className="glass-card2">
                <img src={meal.image} alt={meal.name} />
                <h3>{meal.name}</h3>
                <p>Price: KES {meal.price}</p>
                <p>Quantity: {qty}</p>
                <p>Total: KES {total}</p>
                <div className="card-buttons">
                  <button className="add-btn" onClick={() => handleAdd(meal)}>+</button>
                  <button className="remove-btn" onClick={() => handleRemove(meal)}>-</button>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="section-title">Drinks</h2>
        <div className="page-grid">
          {drinks.map((drink, i) => {
            const qty = cart[drink.name]?.qty || 0;
            const total = qty * drink.price;
            return (
              <div key={i} className="glass-card2">
                <img src={drink.image} alt={drink.name} />
                <h3>{drink.name}</h3>
                <p>Price: KES {drink.price}</p>
                <p>Quantity: {qty}</p>
                <p>Total: KES {total}</p>
                <div className="card-buttons">
                  <button className="add-btn" onClick={() => handleAdd(drink)}>+</button>
                  <button className="remove-btn" onClick={() => handleRemove(drink)}>-</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
