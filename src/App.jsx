// @flow
import React from "react";
import styled from "styled-components";
import TinMarin from "./containers/TinMarin";
/* eslint-disable */
import "./favicon.ico?output=favicon.ico";
/* eslint-enable */
import "./App.scss";

const Background = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const App = () => (
  <Background>
    <TinMarin />
  </Background>
);

export default App;
