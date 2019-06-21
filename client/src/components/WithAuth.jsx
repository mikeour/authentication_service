import React, { Component } from "react";
import axios from "axios";

const WithAuth = (ComponentToProtect, ComponentToRedirect) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      axios.get("api/verifyToken").then(res => {
        if (res.status === 200) {
          this.setState({ loading: false });
        }
      });
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <ComponentToRedirect {...this.props} />;
      }

      return <ComponentToProtect {...this.props} />;
    }
  };
};

export default WithAuth;
