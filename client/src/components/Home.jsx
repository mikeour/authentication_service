import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      message: "Loading..."
    };
  }

  componentDidMount() {
    axios.get("/api/home").then(({ data: message }) => {
      this.setState({ message });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {message}
      </div>
    );
  }
}

export default Home;
