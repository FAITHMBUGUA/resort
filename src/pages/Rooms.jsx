export default function Rooms({ setPage }) {
  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg');
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
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage('dashboard')}>← Back</button>
        <h1>Rooms</h1>

        <div className="page-grid">
          <div className="glass-card2"><h3>Standard Room</h3><p>Affordable comfort</p></div>
          <div className="glass-card2"><h3>Deluxe Room</h3><p>Relax with luxury</p></div>
          <div className="glass-card2"><h3>Family Suite</h3><p>Spacious and cozy</p></div>
        </div>
      </div>
    </>
  );
}

