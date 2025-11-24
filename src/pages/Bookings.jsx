export default function Bookings({ setPage }) {
  const rooms = [
    {
      title: "VIP Room",
      desc: "Luxury experience for 1-2 people",
      img: "/images/vip-room.jpg",
      capacity: "2 people",
      price: "5000 per night",
    },
    {
      title: "Suite 1",
      desc: "3 beds, spacious suite",
      img: "/images/suite1.jpg",
      capacity: "3 people",
      price: "3500 per night",
    },
    {
      title: "Suite 2",
      desc: "4 beds, large suite",
      img: "/images/suite2.jpg",
      capacity: "4 people",
      price: "4000 per night",
    },
    {
      title: "Master Room",
      desc: "Premium master room",
      img: "/images/master-room.jpg",
      capacity: "2 people",
      price: "6000 per night",
    },
  ];

  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg');
          background-size: cover;
          min-height: 100vh;
        }
        .back-btn {
          background: rgba(255,255,255,0.3);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: background 0.3s;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.5);
        }
        .page-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .glass-card2 {
          background: rgba(255,255,255,0.15);
          padding: 20px;
          border-radius: 12px;
          width: 290px;
          backdrop-filter: blur(6px);
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .glass-card2:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .glass-card2 img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .capacity, .price {
          margin-top: 5px;
          font-weight: bold;
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage("dashboard")}>← Back</button>
        <h1>Available Rooms</h1>

        <div className="page-grid">
          {rooms.map((room, idx) => (
            <div key={idx} className="glass-card2">
              <img src={room.img} alt={room.title} />
              <h3>{room.title}</h3>
              <p>{room.desc}</p>
              <p className="capacity">Capacity: {room.capacity}</p>
              <p className="price">Price: {room.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
