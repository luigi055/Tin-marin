// @flow
import { Button } from "./../../styles/GlobalStyles";

const GetButton = Button.extend`
  align-items: center;
  background: #0f0;
  letter-spacing: 2px;
  font-weight: bold;
  height: 42px;
  max-height: 42px;
  text-align: center;
  transition: 0.4s;
  width: 50%;

  &:hover {
    background: #090;
    color: #fff;
    font-size: 0.92rem;
    transition: 0.4s;
  }
`;

export default GetButton;
