// @flow
import React from "react";
import getRandomOption from "./../tools/getRandomOption";

type Props = {
  options: [
    {
      __id: String,
      option: String
    }
  ],
  updateState: Function,
  selectedOptions: [
    {
      __id: String,
      option: String
    }
  ]
};

const GetOption = ({ updateState, options, selectedOptions }: Props) => (
  <button
    type="button"
    onClick={GetOption.handleRandomOption(
      updateState,
      options,
      selectedOptions
    )}
  >
    TIN MARÍN!
  </button>
);

GetOption.handleRandomOption = (updateState, options, selectedOptions) => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  const randomOption = getRandomOption(options);
  updateState({
    randomOption,
    selectedOptions: [...selectedOptions, randomOption]
  });
};

export default GetOption;
