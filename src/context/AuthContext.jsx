


// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export default function AuthProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [role, setRole] = useState(localStorage.getItem("role"));

//   const loginUser = (token, username) => {
//     const userRole = username === "mor_2314" ? "admin" : "user";

//     setToken(token);
//     setRole(userRole);

//     localStorage.setItem("token", token);
//     localStorage.setItem("role", userRole);
//   };

//   const logout = () => {
//     setToken(null);
//     setRole(null);
//     localStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ token, role, loginUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  const loginUser = (token, username) => {
    const userRole = username === "admin" ? "admin" : "user";

    setToken(token);
    setRole(userRole);
    setUser(username);

    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole);
    localStorage.setItem("user", username);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ token, role, user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
