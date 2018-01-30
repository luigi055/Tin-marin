// @flow
import React, { Component } from "react";
import uuid from "uuid/v4";
import styled from "styled-components";

type Props = {
  updateState: Function
};

type State = {
  value: String
};

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  background: #f90;
  cursor: pointer;
  display: inline-block;
  padding: 10px 5px;
  width: 100%;
`;
const Form = styled.form`
  margin: 10px 0;
`;

class AddOptions extends Component<Props, State> {
  state = {
    value: ""
  };

  updateLocalState = state => this.setState(state);

  render() {
    return (
      <Form
        onSubmit={AddOptions.onSubmit(this.props.updateState, this.state.value)}
      >
        <label htmlFor="tinMarinOption">
          <Input
            type="text"
            name="tinMarinOption"
            onChange={AddOptions.onGetValue(this.updateLocalState)}
          />
        </label>
        <Button> Add Option </Button>
      </Form>
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
