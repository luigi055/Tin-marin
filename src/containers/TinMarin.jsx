// @flow
import React, { Component } from "react";
import { Wrapper } from "./../styles/StyledComponents";
import AddOptions from "./../components/AddOptions";
import ShowOptions from "./../components/ShowOptions";
import ResetOptions from "./../components/ResetOptions";
import GetOption from "./../components/GetOption";
import Statistics from "./../components/Statistics";
import { State } from "./../../flow-typed/types";

class TinMarin extends Component<{}, State> {
  state = {
    randomOption: {},
    options: [],
    selectedOptions: []
  };

  updateState = state => this.setState(state);

  render = () => (
    <Wrapper>
      <h1> Tin Marín </h1>
      <p> de do pingüé cúcara mácara títere fué </p>
      <AddOptions updateState={this.updateState} options={this.state.options} />
      <ShowOptions updateState={this.updateState} {...this.state} />
      <ResetOptions updateState={this.updateState} />
      <GetOption {...this.state} updateState={this.updateState} />
      <Statistics {...this.state} />
    </Wrapper>
  );
}

export default TinMarin;
