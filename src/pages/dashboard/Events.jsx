import { useState } from "react";
import { FiMoreVertical, FiUsers, FiCheck } from "react-icons/fi";

export default function Events() {
  const [activeTab, setActiveTab] = useState("draft");

  const tabs = [
    { key: "live", label: "Live", count: 0 },
    { key: "draft", label: "Draft", count: 2 },
    { key: "completed", label: "Completed", count: 14 },
    { key: "canceled", label: "Canceled", count: 0 },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: "16px" }}>Events</h1>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginBottom: "24px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {tabs.map((tab) => (
          <span
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              cursor: "pointer",
              paddingBottom: "10px",
              borderBottom:
                activeTab === tab.key ? "2px solid #1a73e8" : "none",
              color: activeTab === tab.key ? "#1a73e8" : "#444",
              fontWeight: activeTab === tab.key ? "600" : "400",
            }}
          >
            {tab.label} ({tab.count})
          </span>
        ))}
      </div>

      {/* CONTENT */}
      {activeTab === "draft" && (
        <>
          {/* Event Card */}
          <EventCard
            title="Empowering Women in Tech: Bridging the Gender Gap"
            date="May 10, 2025 · 1:35 PM (WAT)"
          />

          <EventCard
            title="Building Scalable Web Apps with React"
            date="May 18, 2025 · 3:00 PM (WAT)"
          />
        </>
      )}

      {activeTab !== "draft" && (
        <p style={{ color: "#666" }}>
          No events available in this category.
        </p>
      )}
    </div>
  );
}

/* ===================== */
/* Event Card Component  */
/* ===================== */

function EventCard({ title, date }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#f1f3f4",
          borderRadius: "8px",
        }}
      />

      {/* Details */}
      <div style={{ flex: 1 }}>
        <small style={{ color: "#666" }}>
          Speaker Session / Tech Talk
        </small>

        <h3 style={{ margin: "4px 0" }}>{title}</h3>

        <p style={{ margin: "4px 0", color: "#666" }}>{date}</p>

        <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FiUsers /> Attendees: 0
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FiCheck /> Check-ins: 0
          </span>
        </div>
      </div>

      {/* Menu icon */}
      <FiMoreVertical size={20} style={{ cursor: "pointer" }} />
    </div>
  );
}