import React, { useState } from "react";
import { useStore } from "../store/useStore";
import biglog from "../assets/biglog.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const login = useStore((state) => state.login);
  const usernamelog = useStore((state) => state.username);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "halo" && password === "halo") {
      if (login(username, password)) {
        alert("Login successful!");
        navigate("/marketplace");
        console.log(username, password, usernamelog, isLoggedIn);
      }
    }
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      fontFamily: "Arial, sans-serif",
      overflow: "hidden",
      margin: 0,
      padding: 0,
      backgroundColor: "#EE4D2D",
    },
    leftPane: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#EE4D2D",
    },
    formContainer: {
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto",
      padding: "3rem",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "2.5rem",
      fontSize: "2rem",
      fontWeight: "600",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.8rem",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      color: "#546e7a",
      fontWeight: "500",
    },
    input: {
      padding: "1rem",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
      fontSize: "1rem",
      transition: "border 0.3s",
      outline: "none",
    },
    button: {
      padding: "1rem",
      backgroundColor: "#EE4D2D",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all 0.3s",
      marginTop: "1rem",
      boxShadow: "0 4px 6px rgba(52, 152, 219, 0.2)",
    },
    rightPane: {
      flex: "1",
      backgroundColor: "#EE4D2D",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    logo: {
      width: "400px",
      height: "400px",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPane}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Welcome Back</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </label>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div style={styles.rightPane}>
        <img src={biglog} alt="Logo" style={styles.logo} />
      </div>
    </div>
  );
}
export default LoginPage;
