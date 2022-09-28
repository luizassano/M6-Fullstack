import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "../Dashboard";
import Home from "../Home";
import Login from "../Login";
import Singup from "../Singup";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@resgiterMe:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/singup">
        <Singup authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        {!authenticated ? (
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        ) : (
          <Redirect to="dashboard" />
        )}
      </Route>

      <Route exact path="/dashboard">
        {authenticated ? (
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
    </Switch>
  );
}

export default Routes;