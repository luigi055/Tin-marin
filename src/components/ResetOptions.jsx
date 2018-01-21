// @flow
import React from "react";

type Props = {
  updateState: Function
};

const ResetOptions = ({ updateState }: Props) => (
  <button type="button" onClick={ResetOptions.handleReset(updateState)}>
    Reset Options
  </button>
);

ResetOptions.handleReset = updateState => e => {
  e.preventDefault();
  updateState({
    options: [],
    randomOption: null
  });
};

export default ResetOptions;
