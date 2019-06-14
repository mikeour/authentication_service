import React, { Component } from "react";
import axios from "axios";

class Secret extends Component {
  constructor() {
    super();

    this.state = {
      message: "Loading..."
    };
  }

  componentDidMount() {
    axios.get("/api/secret").then(({ data: message }) => {
      this.setState({ message });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Secret</h1>
        {message}
      </div>
    );
  }
}

export default Secret;
