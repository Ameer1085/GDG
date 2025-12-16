import { NavLink } from "react-router-dom";
import {
  FiBarChart2,
  FiCalendar,
  FiMail,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    color: isActive ? "#1a73e8" : "#333",
    backgroundColor: isActive ? "#e8f0fe" : "transparent",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <aside
      style={{
        width: "250px",
        padding: "20px",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <h3 style={{ marginBottom: "24px" }}>GDG Gombe</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <NavLink to="/dashboard" end style={linkStyle}>
          <FiBarChart2 />
          Analytics
        </NavLink>

        <NavLink to="/dashboard/events" style={linkStyle}>
          <FiCalendar />
          Events
        </NavLink>

        <NavLink to="/dashboard/emails" style={linkStyle}>
          <FiMail />
          Emails
        </NavLink>

        <NavLink to="/dashboard/settings" style={linkStyle}>
          <FiSettings />
          Settings
        </NavLink>

        <NavLink to="/dashboard/sponsors" style={linkStyle}>
          <FiUsers />
          Sponsors
        </NavLink>
      </nav>
    </aside>
  );
}