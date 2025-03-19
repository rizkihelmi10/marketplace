import React from "react";
import { useStore } from "../store/useStore";
import logo from "../assets/log.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const logout = useStore((state) => state.logout);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        {/* ✅ Logo Section */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        {/* ✅ Navigation Links */}
        <ul style={styles.navLinks}>
          <li>
            <a href="/" style={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="/services" style={styles.navLink}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>

        {/* ✅ Logout Button */}
        {isLoggedIn && (
          <button
            onClick={() => {
              logout();
              alert("Logged out");
              navigate("/");
            }}
            style={styles.logoutButton}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

// ✅ **Styles Object**
const styles = {
  header: {
    backgroundColor: "#EE4D2D",
    padding: "0px 0",
    height: "80px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  navbar: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
    margin: 0,
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  logoutButton: {
    backgroundColor: "#fff",
    color: "#EE4D2D",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};
