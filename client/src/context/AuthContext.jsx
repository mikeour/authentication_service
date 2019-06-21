import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [hasAuth, setHasAuth] = useState(false);

  return (
    <AuthContext.Provider value={[hasAuth, setHasAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
