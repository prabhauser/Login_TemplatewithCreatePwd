import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/index";
import ForgotPassword from "../ForgotPwd/index";
import "./index.css";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/forgotPassword"} component={ForgotPassword} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
