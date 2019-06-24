import React, { useState, useEffect } from "react";
import axios from "axios";

const WithAuth = (ComponentToProtect, ComponentToRedirect) => {
  return props => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      axios.get("api/verifyToken").then(res => {
        if (res.status === 200) {
          setAuthenticated(true);
        }
      });
    }, []);

    if (!authenticated) {
      return <ComponentToRedirect {...props} />;
    }

    return <ComponentToProtect {...props} />;
  };
};

export default WithAuth;
