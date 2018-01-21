// @flow
import React from "react";
import uuid from "uuid/v4";

type Props = {
  updateState: Function
};

const AddOptions = ({ updateState }: Props) => (
  <form onSubmit={AddOptions.onSubmit(updateState)}>
    <label htmlFor="tinMarinOption">
      <input
        type="text"
        name="tinMarinOption"
        ref={option => {
          this.textOption = option;
        }}
      />
    </label>
    <button> Add Option </button>
  </form>
);

AddOptions.onSubmit = actualState => e => {
  e.preventDefault();
  // Using ref propertie for Controlled Component
  const textOption = this.textOption.value;
  const __id = uuid();
  /* eslint-disable */
  actualState(state => {
    return {
      options: [...state.options, { __id, option: textOption }]
    };
  });
  /* eslint-enable */
  // clear input when submit form
  e.target.tinMarinOption.value = "";
};

export default AddOptions;
