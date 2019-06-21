import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Secret from "./Secret";
import Forbidden from "./Forbidden";
import WithAuth from "./WithAuth";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/secret">Secret</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={WithAuth(Secret, Forbidden)} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  );
};

export default App;
