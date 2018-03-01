// @flow
import styled from "styled-components";
import { Button } from "./../../styles/GlobalStyles";

export const AddForm = styled.form`
  margin: 10px 0;
  input {
    display: inline-block;
    width: 100%;
    padding: 12px 5px;
  }
`;

export const AddButton = Button.extend`
  background: ${({ theme }) => theme.addBtn};
  font-weight: bold;
  padding: 12px 5px;
  transition: 0.4s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.addBtnHover};
    transition: 0.4s;
  }
`;

AddButton.defaultProps = {
  theme: {
    addBtn: "#f90",
    addBtnHover: "#fa1"
  }
};
