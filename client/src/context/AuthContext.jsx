import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = props => {
  const [globalUsername, setGlobalUsername] = useState(null);

  return (
    <AuthContext.Provider value={{ globalUsername, setGlobalUsername }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
