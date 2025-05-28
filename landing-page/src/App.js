import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">Start Bootstrap</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>A Warm Welcome!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec justo convallis.</p>
          <button>Call to Action!</button>
        </div>
      </header>

      <main className="container cards">
        <div className="card">
          <h2>Card Title</h2>
          <p>Some quick example text to build on the card title.</p>
          <button>Find Out More!</button>
        </div>
        <div className="card">
          <h2>Card Title</h2>
          <p>Some quick example text to build on the card title.</p>
          <button>Find Out More!</button>
        </div>
        <div className="card">
          <h2>Card Title</h2>
          <p>Some quick example text to build on the card title.</p>
          <button>Find Out More!</button>
        </div>
        <div className="card">
          <h2>Card Title</h2>
          <p>Some quick example text to build on the card title.</p>
          <button>Find Out More!</button>
        </div>
      </main>

      <footer className="footer">
        <p>Copyright © Your Website 2025</p>
      </footer>
    </>
  );
}

export default App;

