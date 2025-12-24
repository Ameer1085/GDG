import { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Create the context
const AuthContext = createContext(null);

// 2️⃣ Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 3️⃣ Restore login on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 4️⃣ Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  // 5️⃣ Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 6️⃣ Custom hook (this is what other files use)
export function useAuth() {
  return useContext(AuthContext);
}
