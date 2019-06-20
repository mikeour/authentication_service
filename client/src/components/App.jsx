import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Secret from "./Secret";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} />
      </Switch>
    </div>
  );
};

export default App;
