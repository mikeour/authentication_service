import React, { useContext } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import Logout from "../Logout";
import Secret from "../Secret";
import Forbidden from "../Forbidden";
import Info from "../Info";
import WithAuth from "../WithAuth";
import { AuthContext } from "../../context/AuthContext.jsx";

const App = () => {
  const { globalUsername, setGlobalUsername } = useContext(AuthContext);

  return (
    <div>
      <ul className="navbar navbar-light bg-light justify-content-center">
        <li className="navbar-brand mb-0 h1">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar-brand mb-0 h1">
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li className="navbar-brand mb-0 h1">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="navbar-brand mb-0 h1">
          <NavLink to="/secret">Secret</NavLink>
        </li>
        <li className="navbar-brand mb-0 h1">
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>

      <Info globalUsername={globalUsername} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/login"
          render={props => (
            <Login {...props} setGlobalUsername={setGlobalUsername} />
          )}
        />
        <Route path="/secret" component={WithAuth(Secret, Forbidden)} />
        <Route
          path="/logout"
          render={props => (
            <Logout {...props} setGlobalUsername={setGlobalUsername} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
