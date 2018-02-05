// @flow
import React from "react";
import RemoveButton from "./Styles";
import { Props } from "./../../../flow-typed/types";

const ResetOptions = ({ updateState }: Props) => (
  <RemoveButton type="button" onClick={ResetOptions.handleReset(updateState)}>
    RESET OPTIONS
  </RemoveButton>
);

ResetOptions.handleReset = updateState => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  updateState({
    options: [],
    randomOption: {},
    selectedOptions: []
  });
};

export default ResetOptions;
