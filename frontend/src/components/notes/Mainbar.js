// Mainbar.js
import React, { useState } from 'react';
import './Mainbar.css';

function Mainbar() {
 const [isOpen, setIsOpen] = useState(false);

 const togglePanel = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 300);
 };

 return (
    <div className="mainbar">
      <h2>Welcome to the Main Bar!</h2>
      <button onClick={togglePanel}>Click me</button>
      {isOpen && (
        <div className="login-panel">
          <h3>Logowanie</h3>
          <input type="text" placeholder="Nazwa użytkownika" />
          <input type="password" placeholder="Hasło" />
          <button>Zaloguj się</button>
        </div>
      )}
    </div>
 );
}

export default Mainbar;