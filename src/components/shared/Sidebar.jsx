import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    padding: "10px",
    display: "block",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <aside style={{ width: "220px", borderRight: "1px solid #ddd" }}>
      <NavLink to="/dashboard" end style={linkStyle}>
        Analytics
      </NavLink>

      <NavLink to="/dashboard/events" style={linkStyle}>
        Events
      </NavLink>

      <NavLink to="/dashboard/emails" style={linkStyle}>
        Emails
      </NavLink>

      <NavLink to="/dashboard/settings" style={linkStyle}>
        Settings
      </NavLink>

      <NavLink to="/dashboard/sponsors" style={linkStyle}>
        Sponsors
      </NavLink>
    </aside>
  );
}