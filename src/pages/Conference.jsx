export default function Conference({ setPage }) {
  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg');
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
        <h1>Conference Halls</h1>

        <div className="page-grid">
          <div className="glass-card2"><h3>Hall A</h3><p>Corporate meetings</p></div>
          <div className="glass-card2"><h3>Hall B</h3><p>Workshops & seminars</p></div>
          <div className="glass-card2"><h3>VIP Boardroom</h3><p>Premium experience</p></div>
        </div>
      </div>
    </>
  );
}

