// @flow
import React from "react";

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

const ShowOptions = ({ options, updateState, randomOption }: Props) => {
  const RenderOptions = () =>
    options.map(option => {
      const selectedClass =
        option.option === randomOption.option
          ? "tinMarin__list-item--chosen"
          : "";

      return (
        <li
          key={option.__id}
          className={`${selectedClass} tinMarin__list-item`}
        >
          {option.option}
          <button
            type="button"
            onClick={ShowOptions.handleDeleteOption(
              updateState,
              options,
              option
            )}
          >
            X Eliminar
          </button>
        </li>
      );
    });

  return (
    <ul className="tinMarin__list">
      <RenderOptions />
    </ul>
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
