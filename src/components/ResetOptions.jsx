// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  updateState: Function
};

const Reset = styled.button`
  background: #ff1111;
  cursor: pointer;
  display: inline-block;
  padding: 10px 5px;
  width: 50%;
`;

const ResetOptions = ({ updateState }: Props) => (
  <Reset type="button" onClick={ResetOptions.handleReset(updateState)}>
    Reset Options
  </Reset>
);

ResetOptions.handleReset = updateState => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  updateState({
    options: [],
    randomOption: null,
    selectedOptions: []
  });
};

export default ResetOptions;
