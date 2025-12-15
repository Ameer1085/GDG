import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Events from "./pages/dashboard/Events";

function App() {
  return (
    <Routes>
      {/* redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;