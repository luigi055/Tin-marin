// @flow
import React, { Component } from "react";
import styled from "styled-components";
import AddOptions from "./../components/AddOptions";
import ShowOptions from "./../components/ShowOptions";
import ResetOptions from "./../components/ResetOptions";
import GetOption from "./../components/GetOption";
import Statistics from "./../components/Statistics";

type State = {
  randomOption: {
    __id: String,
    option: String
  },
  options: [
    {
      __id: String,
      option: String
    }
  ],
  selectedOptions: [
    {
      __id: String,
      option: String
    }
  ]
};

const Wrapper = styled.div`
  border: 2px solid #a0a;
  background-color: #cfe;
`;

class TinMarin extends Component<{}, State> {
  state = {
    randomOption: {},
    options: [],
    selectedOptions: []
  };

  updateState = state => this.setState(state);

  render = () => (
    <Wrapper className="tinMarin">
      <h1> Tin Marín </h1> <p> de do pingüé cúcara mácara títere fué </p>
      <AddOptions updateState={this.updateState} />
      <ShowOptions updateState={this.updateState} {...this.state} />
      <ResetOptions updateState={this.updateState} />
      <GetOption {...this.state} updateState={this.updateState} />
      <Statistics selectedOptions={this.state.selectedOptions} />
    </Wrapper>
  );
}

export default TinMarin;
