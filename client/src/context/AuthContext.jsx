import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios.get("/api/verifyToken").then(({ data: name }) => {
      setUsername(name);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {props.children}
    </AuthContext.Provider>
  );
};