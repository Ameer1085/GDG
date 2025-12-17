export default function Signup() {
  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Sign Up</h2>
      <input placeholder="Name" style={{ width: "100%", marginBottom: "10px" }} />
      <input placeholder="Email" style={{ width: "100%", marginBottom: "10px" }} />
      <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: "10px" }} />
      <button style={{ width: "100%" }}>Create Account</button>
    </div>
  );
}