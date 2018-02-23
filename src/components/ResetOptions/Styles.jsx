// @flow
import { Button } from "./../../styles/GlobalStyles";

const RemoveButton = Button.extend`
  align-items: center;
  background: ${({ theme }) => theme.removeOptionBtn};
  color: ${({ theme }) => theme.fontLightColor};
  font-weight: bold;
  height: 42px;
  max-height: 42px;
  text-align: center;
  transition: 0.4s;
  width: 50%;

  &:hover {
    background: ${({ theme }) => theme.removeOptionBtnHover};
    color: ${({ theme }) => theme.fontLightColor};
    font-size: 0.92rem;
    transition: 0.4s;
  }
`;

RemoveButton.defaultProps = {
  theme: {
    removeOptionBtn: "#ff1111",
    removeOptionBtnHover: "#e22",
    fontLightColor: "#fefefe"
  }
};

export default RemoveButton;
