// @flow
import React, { Component } from "react";
import uuid from "uuid/v4";
import { AddForm, AddButton } from "./Styles";
import { Props } from "./../../../flow-typed/types";

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
      <AddForm
        onSubmit={AddOptions.onSubmit(
          this.props.updateState,
          this.state.value,
          this.props.options
        )}
      >
        <label htmlFor="tinMarinOption">
          <input
            type="text"
            name="tinMarinOption"
            onChange={AddOptions.onGetValue(this.updateLocalState)}
          />
        </label>
        <AddButton> ADD OPTION </AddButton>
      </AddForm>
    );
  }
}

AddOptions.onSubmit = (updateState, value, options) => (
  e: SyntheticEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const __id = uuid();
  // Check if the added option isn't repeated
  const uniqueValue = options.filter(({ option }) => option === value);
  if (uniqueValue[0]) {
    console.log("Repated Value");
    // clear input when submit form
    e.target.tinMarinOption.value = "";
    return;
  }

  // Update the state adding a new option to options array
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
