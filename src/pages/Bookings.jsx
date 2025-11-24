export default function Bookings({ setPage }) {
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
        <h1>Bookings</h1>

        <div className="page-grid">
          <div className="glass-card2"><h3>Check Availability</h3><p>Rooms & facilities</p></div>
          <div className="glass-card2"><h3>Make Reservation</h3><p>Book your stay</p></div>
          <div className="glass-card2"><h3>My Bookings</h3><p>See your history</p></div>
        </div>
      </div>
    </>
  );
}
