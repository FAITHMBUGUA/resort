import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [page, setPage] = useState('register');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('faithResortUser')) || null);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, gender, age, email, password } = e.target;
    if(!name.value || !gender.value || !age.value || !email.value || !password.value){
      alert('Fill all fields');
      return;
    }
    const userObj = { name: name.value, gender: gender.value, age: age.value, email: email.value, password: password.value };
    localStorage.setItem('faithResortUser', JSON.stringify(userObj));
    alert('Registered! Please login.');
    setPage('login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const storedUser = JSON.parse(localStorage.getItem('faithResortUser'));
    if(storedUser && storedUser.email === email.value && storedUser.password === password.value){
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

  if(page === 'register'){
    return (
      <div className="page-background">
        <div className="glass-card">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input name="name" placeholder="Full Name" />
            <select name="gender">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input name="age" type="number" placeholder="Age" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <div className="link" onClick={() => setPage('login')}>Already have an account? Login</div>
        </div>
      </div>
    );
  }

  if(page === 'login'){
    return (
      <div className="page-background">
        <div className="glass-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          {error && <div style={{color:'red', marginTop:'10px'}}>{error}</div>}
          <div className="link" onClick={() => setPage('register')}>Don't have an account? Register</div>
        </div>
      </div>
    );
  }

  if(page === 'dashboard' && user){
    return (
      <div className="dashboard-background">
        <h1>Welcome to Faith Resort, {user.name}!</h1>
        <h3>Explore our services:</h3>
        <div className="dashboard-grid">
          <div className="glass-card"><h3>Rooms</h3><p>Luxury and comfort rooms</p></div>
          <div className="glass-card"><h3>Bookings</h3><p>Manage your reservations</p></div>
          <div className="glass-card"><h3>Conference</h3><p>Book conference halls</p></div>
          <div className="glass-card"><h3>Foods & Drinks</h3><p>Restaurant and bar</p></div>
          <div className="glass-card"><h3>Products</h3><p>Souvenirs and gifts</p></div>
          <div className="glass-card"><h3>Other Services</h3><p>Spa, Gym, Entertainment</p></div>
        </div>
        <button style={{marginTop:'30px'}} onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return null;
}
