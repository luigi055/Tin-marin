// @flow
import { Button } from "./../../styles/GlobalStyles";

const GetButton = Button.extend`
  align-items: center;
  background: ${({ theme }) => theme.selectBtn};
  letter-spacing: 2px;
  font-weight: bold;
  height: 42px;
  max-height: 42px;
  text-align: center;
  transition: 0.4s;
  width: 50%;

  &:hover {
    background: ${({ theme }) => theme.selectBtnHover};
    color: ${({ theme }) => theme.fontLightColor};
    font-size: 0.92rem;
    transition: 0.4s;
  }
`;

GetButton.defaultProps = {
  theme: {
    selectBtn: "#0f0",
    selectBtnHover: "#090",
    fontLightColor: "#fefefe"
  }
};

export default GetButton;
