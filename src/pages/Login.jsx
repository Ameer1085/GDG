import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import users from "../data/users.json";
import { useAuth } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = users.find((u) => u.email === email);
    if (!foundUser) {
      alert("User not found");
      return;
    }

    const ok = bcrypt.compareSync(password, foundUser.password);
    if (!ok) {
      alert("Wrong password");
      return;
    }

    login({ id: foundUser.id, email: foundUser.email });
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
