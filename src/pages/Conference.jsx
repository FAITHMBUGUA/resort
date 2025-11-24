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
          text-align: center;
        }
        .glass-card2 img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage('dashboard')}>← Back</button>
        <h1>Conference Halls</h1>

        <div className="page-grid">

          {/* Hall A - holds 6 people = 1000 per hour */}
          <div className="glass-card2">
            <img src="/images/hall A.jpg" alt="Hall A" />
            <h3>Hall A</h3>
            <p>Capacity: 6 people</p>
            <p>Price: 1000 per hour</p>
          </div>

          {/* Hall C - 1000 people = 5000 per hour */}
          <div className="glass-card2">
            <img src="/images/Hall C.jpg" alt="Hall C" />
            <h3>Hall C</h3>
            <p>Capacity: 1000 people</p>
            <p>Price: 5000 per hour</p>
          </div>

          {/* Hall B - 200 people = 2500 per hour */}
          <div className="glass-card2">
            <img src="/images/empty-meeting-room-with-table-whiteboard.jpg" alt="Hall B" />
            <h3>Hall B</h3>
            <p>Capacity: 200 people</p>
            <p>Price: 2500 per hour</p>
          </div>

        </div>
      </div>
    </>
  );
}
