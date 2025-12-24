import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <aside style={styles.sidebar}>
      <h3>GDG Gombe</h3>

      <NavLink to="/dashboard" end style={styles.link}>
        Analytics
      </NavLink>

      <NavLink to="/dashboard/events" style={styles.link}>
        Events
      </NavLink>

      <NavLink to="/dashboard/emails" style={styles.link}>
        Emails
      </NavLink>

      <NavLink to="/dashboard/settings" style={styles.link}>
        Settings
      </NavLink>

      <NavLink to="/dashboard/sponsors" style={styles.link}>
        Sponsors
      </NavLink>

      <button onClick={logout} style={styles.logout}>
        Logout
      </button>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    padding: "20px",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    padding: "10px",
    borderRadius: "6px",
  },
  logout: {
    marginTop: "auto",
    padding: "10px",
    background: "#d93025",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
