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
import { GlobalStyling, Div, Ul, Li } from "./styles";
import { AuthContext } from "../../context/AuthContext.jsx";

const App = () => {
  const { globalUsername, setGlobalUsername } = useContext(AuthContext);

  return (
    <Div>
      <Ul>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/signup">Signup</NavLink>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
        <Li>
          <NavLink to="/secret">Secret</NavLink>
        </Li>
        <Li>
          <NavLink to="/logout">Logout</NavLink>
        </Li>
      </Ul>

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
      <GlobalStyling />
    </Div>
  );
};

export default App;
