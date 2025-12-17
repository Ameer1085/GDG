import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "20px" }}>Login</Link>
        <Link to="/signup">Sign Up</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}