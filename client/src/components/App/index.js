import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import Logout from "../Logout";
import Secret from "../Secret";
import Forbidden from "../Forbidden";
import Info from "../Info";
import WithAuth from "../WithAuth";
import { AuthContext } from "../../shared/context/";
import { GlobalStyling } from "../../shared/styles/";
import { Div, Ul, Li, StyledNavLink } from "./styles";

const App = () => {
  const { globalUsername, setGlobalUsername } = useContext(AuthContext);

  return (
    <Div>
      <Ul>
        <Li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/signup">Signup</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/secret">Secret</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/logout">Logout</StyledNavLink>
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
