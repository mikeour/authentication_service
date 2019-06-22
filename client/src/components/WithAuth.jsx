import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// const WithAuth = (ComponentToProtect, ComponentToRedirect) => {
//   return class extends Component {
//     constructor() {
//       super();
//       this.state = {
//         loading: true
//       };
//     }

//     componentDidMount() {
//       axios.get("api/verifyToken").then(res => {
//         if (res.status === 200) {
//           this.setState({ loading: false });
//         }
//       });
//     }

//     render() {
//       const { loading } = this.state;

//       if (loading) {
//         return <ComponentToRedirect {...this.props} />;
//       }

//       return <ComponentToProtect {...this.props} />;
//     }
//   };
// };

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
