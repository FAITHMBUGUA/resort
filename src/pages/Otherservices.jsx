export default function Otherservices({ setPage }) {
  const gymServices = [
    { name: "Treadmill", price: 200, image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" },
    { name: "Weight Lifting", price: 250, image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" },
    { name: "Yoga Class", price: 180, image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg" },
    { name: "Spinning Bike", price: 220, image: "https://images.pexels.com/photos/1954523/pexels-photo-1954523.jpeg" },
    { name: "Crossfit Training", price: 300, image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" },
  ];

  const spaServices = [
    { name: "Full Body Massage", price: 1000, image: "https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg" },
    { name: "Foot Massage", price: 500, image: "https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg" },
    { name: "Aromatherapy", price: 800, image: "https://images.pexels.com/photos/4056727/pexels-photo-4056727.jpeg" },
  ];

  const swimmingServices = [
    { name: "Indoor - Adult", price: 600, image: "https://images.pexels.com/photos/260951/pexels-photo-260951.jpeg" },
    { name: "Indoor - Kids", price: 250, image: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg" },
    { name: "Outdoor - Adult", price: 350, image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" },
    { name: "Outdoor - Kids", price: 150, image: "https://images.pexels.com/photos/261103/pexels-photo-261103.jpeg" },
  ];

  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg');
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
        }
        h1, h2 {
          text-align: center;
        }
        .service-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .service-card {
          background: rgba(255,255,255,0.15);
          padding: 15px;
          border-radius: 12px;
          width: 280px;
          backdrop-filter: blur(6px);
          text-align: center;
          transition: transform 0.3s;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .service-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage('dashboard')}>← Back</button>
        <h1>Other Services</h1>

        <h2>Gym Services</h2>
        <div className="service-grid">
          {gymServices.map((g, i) => (
            <div key={i} className="service-card">
              <img src={g.image} alt={g.name} />
              <h3>{g.name}</h3>
              <p>Price per hour: KES {g.price}</p>
            </div>
          ))}
        </div>

        <h2>Spa Services</h2>
        <div className="service-grid">
          {spaServices.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.image} alt={s.name} />
              <h3>{s.name}</h3>
              <p>Price: KES {s.price}</p>
            </div>
          ))}
        </div>

        <h2>Swimming</h2>
        <div className="service-grid">
          {swimmingServices.map((sw, i) => (
            <div key={i} className="service-card">
              <img src={sw.image} alt={sw.name} />
              <h3>{sw.name}</h3>
              <p>Price: KES {sw.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
