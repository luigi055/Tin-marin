// @flow
import { Button } from "./../../styles/GlobalStyles";

const RemoveButton = Button.extend`
  align-items: center;
  background: #ff1111;
  color: #fefefe;
  font-weight: bold;
  height: 42px;
  max-height: 42px;
  text-align: center;
  transition: 0.4s;
  width: 50%;

  &:hover {
    background: #e22;
    color: #fff;
    font-size: 0.92rem;
    transition: 0.4s;
  }
`;

export default RemoveButton;
