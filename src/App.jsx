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
  height: 100vh;
  background: rgb(63, 76, 107);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#3f4c6b",
      endColorstr="#3f4c6b",
      GradientType=1
    );
`;

const App = () => (
  <Background>
    <TinMarin />
  </Background>
);

export default App;
