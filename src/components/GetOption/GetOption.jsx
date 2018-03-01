// @flow
import React from "react";
import GetButton from "./Styles";
import getRandomOption from "./../../tools/getRandomOption";
import { Props } from "./../../../flow-typed/types";

const GetOption = ({ updateState, options, selectedOptions }: Props) => (
  <GetButton
    type="button"
    onClick={GetOption.handleRandomOption(
      updateState,
      options,
      selectedOptions
    )}
  >
    !TIN MARÍN!
  </GetButton>
);

GetOption.handleRandomOption = (updateState, options, selectedOptions) => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  const randomOption = getRandomOption(options);
  if (options.length === 0) return;
  updateState({
    randomOption,
    selectedOptions: [...selectedOptions, randomOption]
  });
};

export default GetOption;
