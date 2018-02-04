// @flow
import React from "react";
import {
  TinMarinList,
  TinMarinOption,
  TinMarinOptionSelected,
  Delete,
  Placeholder
} from "./../styles/StyledComponents";

import { Props } from "./../../flow-typed/types";

const ShowOptions = ({ options, updateState, randomOption }: Props) => {
  const RenderOptions = () =>
    options.map(option => {
      if (option === randomOption) {
        return (
          <TinMarinOptionSelected key={option.__id}>
            {option.option}
            <Delete
              type="button"
              onClick={ShowOptions.handleDeleteOption(
                updateState,
                options,
                option
              )}
            >
              &times;
            </Delete>
          </TinMarinOptionSelected>
        );
      }
      return (
        <TinMarinOption key={option.__id}>
          {option.option}
          <Delete
            type="button"
            onClick={ShowOptions.handleDeleteOption(
              updateState,
              options,
              option
            )}
          >
            &times;
          </Delete>
        </TinMarinOption>
      );
    });

  return (
    <TinMarinList>
      {options.length > 0 ? (
        <RenderOptions />
      ) : (
        <Placeholder>Enter an Option to Get Started</Placeholder>
      )}
    </TinMarinList>
  );
};

ShowOptions.handleDeleteOption = (updateState, options, option) => (
  e: SyntheticEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  const remainingOptions = options.filter(item => item !== option);
  updateState({
    options: remainingOptions
  });
};
export default ShowOptions;
