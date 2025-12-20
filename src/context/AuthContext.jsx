import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // MOCK LOGIN (Laravel-ready)
  const login = (email, password) => {
    const fakeUser = {
      id: 1,
      name: "Abhishek",
      email,
      token: "fake-jwt-token",
    };
    setUser(fakeUser);
  };

  const register = (name, email, password) => {
    const fakeUser = {
      id: 1,
      name,
      email,
      token: "fake-jwt-token",
    };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cart"); // optional
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
