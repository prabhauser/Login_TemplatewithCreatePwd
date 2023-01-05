import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/index";
import SetSecurityQn from "../Login/SetSecurityQn";
import "./index.css";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route exact path={"/setSecurityQn"} component={SetSecurityQn} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
