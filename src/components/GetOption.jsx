// @flow
import React from "react";
import styled from "styled-components";
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

const Add = styled.button`
  background: #0f0;
  cursor: pointer;
  display: inline-block;
  padding: 10px 5px;
  width: 50%;
`;

const GetOption = ({ updateState, options, selectedOptions }: Props) => (
  <Add
    type="button"
    onClick={GetOption.handleRandomOption(
      updateState,
      options,
      selectedOptions
    )}
  >
    TIN MARÍN!
  </Add>
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
