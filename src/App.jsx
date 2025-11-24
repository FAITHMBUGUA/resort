import React, { useState } from 'react';
import './index.css';
import Rooms from './pages/Rooms';
import Cart from './pages/Cart';
import Bookings from './pages/Bookings';
import Conference from './pages/Conference';
import Foods from './pages/Foods';
import Otherservices from './pages/Otherservices';

export default function App() {
  const [page, setPage] = useState('login'); // start with login page
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('faithResortUser')) || null);
  const [cart, setCart] = useState({});
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) {
      alert('Fill all fields');
      return;
    }

    const userObj = { name, email, password };
    localStorage.setItem('faithResortUser', JSON.stringify(userObj));
    alert('Registered! Please login.');
    setPage('login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const email = form.email.value;
    const password = form.password.value;

    const storedUser = JSON.parse(localStorage.getItem('faithResortUser'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setPage('dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setPage('login');
    setUser(null);
    setError('');
  };

  // ---- Page routing ----
  if (page === "Rooms") return <Rooms setPage={setPage} />;
  if (page === "Cart") return <Cart setPage={setPage} cart={cart} setCart={setCart} />;
  if (page === "Bookings") return <Bookings setPage={setPage} />;
  if (page === "Conference") return <Conference setPage={setPage} />;
  if (page === "Foods") return <Foods setPage={setPage} cart={cart} setCart={setCart} />;
  if (page === "Otherservices") return <Otherservices setPage={setPage} />;

  // ---- Register page ----
  if (page === 'register') {
    return (
      <div className="page-background">
        <div className="glass-card">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input name="name" placeholder="Full Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <div className="link" onClick={() => setPage('login')}>Already have an account? Login</div>
        </div>
      </div>
    );
  }

  // ---- Login page ----
  if (page === 'login') {
    return (
      <div className="page-background">
        <div className="glass-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          <div className="link" onClick={() => setPage('register')}>Don't have an account? Register</div>
        </div>
      </div>
    );
  }

  // ---- Dashboard page ----
  if (page === 'dashboard' && user) {
    return (
      <div className="dashboard-background">
        {/* Top bar with cart icon */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: 'blue',
              margin: '10px',
            }}
            onClick={() => setPage('Cart')}
            title="View Cart"
          >
            🛒
          </span>
        </div>

        <h1>Welcome to Faith Resort, {user.name}!</h1>
        <h3>Explore our services:</h3>

        <div className="dashboard-grid">
          <div className="glass-card" onClick={() => setPage('Rooms')}>
            <h3>Rooms</h3>
            <p>Luxury and comfort rooms</p>
          </div>
          <div className="glass-card" onClick={() => setPage('Bookings')}>
            <h3>Bookings</h3>
            <p>Manage your reservations</p>
          </div>
          <div className="glass-card" onClick={() => setPage('Conference')}>
            <h3>Conference</h3>
            <p>Book conference halls</p>
          </div>
          <div className="glass-card" onClick={() => setPage('Foods')}>
            <h3>Foods & Drinks</h3>
            <p>Restaurant and bar</p>
          </div>
          <div className="glass-card" onClick={() => setPage('Otherservices')}>
            <h3>Other Services</h3>
            <p>Spa, Gym, Entertainment</p>
          </div>
        </div>

        <button style={{ marginTop: '30px' }} onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return null;
}
