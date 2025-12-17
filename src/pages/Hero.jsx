import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>GDG Dashboard</h1>
      <p>Manage events, members, and community activities.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/signup">
          <button style={{ marginRight: "10px" }}>Get Started</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}