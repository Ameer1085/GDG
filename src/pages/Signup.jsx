import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    localStorage.setItem(
      "user",
      JSON.stringify({ email, password: hashedPassword })
    );

    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div style={styles.card}>
      <h2>Sign Up</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleSignup} style={styles.button}>
        Create Account
      </button>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
  },
};
