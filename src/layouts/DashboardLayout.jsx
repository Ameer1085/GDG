import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}