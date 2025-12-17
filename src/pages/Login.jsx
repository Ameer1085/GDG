export default function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Login</h2>
      <input placeholder="Email" style={{ width: "100%", marginBottom: "10px" }} />
      <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: "10px" }} />
      <button style={{ width: "100%" }}>Login</button>
    </div>
  );
}