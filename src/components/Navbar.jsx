import React, { use } from 'react';
import { useStore } from '../store/useStore';
import logo from '../assets/log.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const logout = useStore(state => state.logout);
    const isLoggedIn = useStore(state => state.isLoggedIn);
    const navigate = useNavigate();
  return (
    <header className="header" style={{ 
      backgroundColor: '#EE4D2D', 
      padding: '0px 0',
      height: '100px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <nav className="navbar" style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: '50px', marginLeft: '-130px' }} />
        </div>
        <ul className="nav-links" style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '2rem', 
          marginRight: '40px',
          justifyContent: 'center',
          marginBottom: '60px',
          top: '50%',
          padding: 0 
        }}>
          <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
          <li><a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
          <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
      <button 
              onClick={() => {
                logout();
                alert('Logged out');
                navigate('/')
              }}
              style={{
                backgroundColor: '#fff',
                color: '#EE4D2D',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'absolute',
                right: '2rem',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              Logout
            </button>
      
    </header>
  )
}
export default Navbar;