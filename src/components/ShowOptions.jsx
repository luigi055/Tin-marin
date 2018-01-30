// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  options: [
    {
      __id: String,
      option: String
    }
  ],
  randomOption: {
    __id: String,
    option: String
  },
  updateState: Function
};

const TinMarinList = styled.ul`
  border: #ea0;
  background: #868;
  height: 200px;
  list-style: none;
  margin-bottom: 10px;
  max-height: 200px;
  overflow: auto;
`;

const TinMarinOption = styled.li`
  background: rebeccapurple;
  border-bottom: 2px solid #aa00ee;
  color: #cecece;
  padding: 10px 25px;
  text-align: left;
`;

const TinMarinOptionSelected = styled.li`
  background: #0f0;
  border-bottom: 2px solid #aa00ee;
  color: #333;
  padding: 10px 25px;
  text-align: left;
`;

const Delete = styled.button`
  background: #ff5555;
  border: 2px solid #ff3333;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  padding: 2px;
`;

const Placeholder = styled.span``;

const ShowOptions = ({ options, updateState, randomOption }: Props) => {
  const RenderOptions = () =>
    options.map(option => {
      if (option.option === randomOption.option) {
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
              X
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
            X
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
