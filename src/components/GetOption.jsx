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
  updateState: Function
};

const GetOption = ({ updateState, options }: Props) => (
  <button
    type="button"
    onClick={GetOption.handleRandomOption(updateState, options)}
  >
    TIN MARÍN!
  </button>
);

GetOption.handleRandomOption = (updateState, options) => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  updateState({
    randomOption: getRandomOption(options)
  });
};

export default GetOption;
