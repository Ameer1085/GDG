import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Analytics from "./pages/sidebar/Analytics";
import Events from "./pages/sidebar/Events";
import Emails from "./pages/sidebar/Emails";
import Settings from "./pages/sidebar/Settings";
import Sponsors from "./pages/sidebar/Sponsors";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Analytics />} />
        <Route path="events" element={<Events />} />
        <Route path="emails" element={<Emails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Route>
    </Routes>
  );
}