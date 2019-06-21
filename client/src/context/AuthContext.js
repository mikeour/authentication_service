import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = props => {
  const [hasAuth, setHasAuth] = useState(false);

  const handleAuth = () => {};

  return (
    <AuthContext.Provider value={{ hasAuth, setHasAuth, handleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
