import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Analytics from "./pages/sidebar/Analytics";
import Events from "./pages/sidebar/Events";
import Emails from "./pages/sidebar/Emails";
import Settings from "./pages/sidebar/Settings";
import Sponsors from "./pages/sidebar/Sponsors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

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

export default App;