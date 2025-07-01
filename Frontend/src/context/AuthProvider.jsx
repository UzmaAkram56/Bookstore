import React, { createContext, useContext, useState } from "react";
// creting the context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const InitAuthUser = localStorage.getItem("Users");
  // managing the state of login and signup
  const [authUser, setAuthUser] = useState(
    InitAuthUser ? JSON.parse(InitAuthUser) : undefined
  );
  return (
    //to globally access this
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// use hook (useAuth) for the authuser and setauthuser.....
export const useAuth = () => useContext(AuthContext);
