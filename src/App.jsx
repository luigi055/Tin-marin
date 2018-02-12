// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import TinMarin from "./containers/TinMarin/TinMarin";
import About from "./containers/About/About";
import Header from "./containers/Header/Header";
import { Background } from "./styles/GlobalStyles";

// import "./App.scss";

const App = () => (
  <Background>
    <Header />
    <Switch>
      <Route exact path="/" component={TinMarin} />
      <Route exact path="/about" component={About} />
      <Route render={() => <h1>404 - Not Found :(</h1>} />
    </Switch>
  </Background>
);

export default App;
