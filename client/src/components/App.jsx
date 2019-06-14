import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import Secret from "./Secret.jsx";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/secret" component={Secret} />
      </Switch>
    </div>
  );
};

export default App;
