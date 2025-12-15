import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: "20px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}