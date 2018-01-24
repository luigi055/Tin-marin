// @flow
import React, { Component } from "react";
import uuid from "uuid/v4";

type Props = {
  updateState: Function
};

type State = {
  value: String
};

class AddOptions extends Component<Props, State> {
  state = {
    value: ""
  };

  updateLocalState = state => this.setState(state);

  render() {
    return (
      <form
        onSubmit={AddOptions.onSubmit(this.props.updateState, this.state.value)}
      >
        <label htmlFor="tinMarinOption">
          <input
            type="text"
            name="tinMarinOption"
            onChange={AddOptions.onGetValue(this.updateLocalState)}
          />
        </label>
        <button> Add Option </button>
      </form>
    );
  }
}

AddOptions.onSubmit = (updateState, value) => (
  e: SyntheticEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const __id = uuid();
  updateState(state => ({
    options: [
      ...state.options,
      {
        __id,
        option: value
      }
    ]
  }));
  // clear input when submit form
  e.target.tinMarinOption.value = "";
};

AddOptions.onGetValue = updateLocalState => (
  e: SyntheticInputEvent<HTMLInputElement>
) =>
  updateLocalState({
    value: e.target.value
  });

export default AddOptions;
