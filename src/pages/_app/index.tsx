import * as React from "react";
import Navbar from "../../components/NavBar";
import ContextProvider from "../../context/ContextProvider";
import AuthPage from "../auth";
import Dashboard from "../dashboard";
import { Switch, Route, Router } from "./../../util/router";

import "./app.styles.scss";

export interface AppPageProps {}

const AppPage: React.FC<AppPageProps> = () => {
  return (
    <>
      <div className="app">
        <ContextProvider>
          <>
            <Navbar />
            <Router>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={AuthPage} />
              </Switch>
            </Router>
          </>
        </ContextProvider>
      </div>
    </>
  );
};

export default AppPage;
