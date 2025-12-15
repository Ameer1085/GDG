export default function Events() {
  return (
    <div>
      <h1>Events</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <span>Live (0)</span>
        <span>Draft (2)</span>
        <span>Completed (14)</span>
        <span>Canceled (0)</span>
      </div>

      {/* Event Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "16px",
          display: "flex",
          gap: "16px",
        }}
      >
        {/* Left icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        />

        {/* Event info */}
        <div style={{ flex: 1 }}>
          <small>Speaker Session / Tech Talk</small>
          <h3>Empowering Women in Tech: Bridging the Gender Gap</h3>
          <p>May 10, 2025 · 1:35 PM (WAT)</p>

          <div style={{ display: "flex", gap: "20px" }}>
            <span>Attendees: 0</span>
            <span>Check-ins: 0</span>
          </div>
        </div>

        {/* Menu dots */}
        <div>⋮</div>
      </div>
    </div>
        
        
  );
}