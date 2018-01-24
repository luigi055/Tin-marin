// @flow
import React from "react";
import uuid from "uuid/v4";
import mostCoincidence from "./../tools/mostCoincidence";

type Props = {
  selectedOptions: [
    {
      __id: String,
      option: String
    }
  ]
};

const Statistics = ({ selectedOptions }: Props) => {
  const coincidence = mostCoincidence(selectedOptions);
  const renderOptions = () =>
    selectedOptions.map((option, i) => (
      <li key={uuid()}>
        {i + 1}: {option.option}
      </li>
    ));

  return (
    <div>
      <h5>Most Coincidence: {coincidence && coincidence.option}</h5>
      <ul>{renderOptions()}</ul>
    </div>
  );
};

export default Statistics;
