// @flow
import React from "react";
import { Loading, Image } from "./Styles";
import spinner from "./../../img/spinner.svg";
// <p> Loading... </p>;

const Spinner = () => (
  <Loading>
    <Image src={spinner} alt="loading indicator" />
  </Loading>
);

export default Spinner;
