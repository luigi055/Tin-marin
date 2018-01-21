// @flow
import React, { Component } from "react";
import AddOptions from "./../components/AddOptions";
import ShowOptions from "./../components/ShowOptions";
import ResetOptions from "./../components/ResetOptions";
import GetOption from "./../components/GetOption";

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
  ]
};

class TinMarin extends Component<{}, State> {
  state = {
    randomOption: {},
    options: []
  };

  updateState = state => this.setState(state);

  render = () => (
    <div className="tinMarin">
      <h1> Tin Marín </h1> <p> de do pingüé cúcara mácara títere fué </p>
      <AddOptions updateState={this.updateState} />
      <ShowOptions
        options={this.state.options}
        updateState={this.updateState}
        randomOption={this.state.randomOption}
      />
      <ResetOptions updateState={this.updateState} />
      <GetOption options={this.state.options} updateState={this.updateState} />
    </div>
  );
}

export default TinMarin;
