// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./containers/Header/Header";
// import TinMarin from "./containers/TinMarin/TinMarin";
// import About from "./containers/About/About";
import AsynchRoutes from "./AsyncRoutes";
import { Background } from "./styles/GlobalStyles";
import theme from "./styles/mainTheme";

const App = () => (
  <ThemeProvider theme={theme()}>
    <Background>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          // component={TinMarin}
          component={props => (
            <AsynchRoutes
              props={props}
              loadingPromise={import("./containers/TinMarin/TinMarin")}
            />
          )}
        />
        <Route
          exact
          path="/about"
          // component={About}
          component={props => (
            <AsynchRoutes
              props={props}
              loadingPromise={import("./containers/About/About")}
            />
          )}
        />
        <Route exact render={() => <h1>404 - Not Found :(</h1>} />
      </Switch>
    </Background>
  </ThemeProvider>
);

export default App;
