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
  background: #f90;
  font-weight: bold;
  padding: 12px 5px;
  transition: 0.4s;
  width: 100%;

  &:hover {
    background: #fa1;
    transition: 0.4s;
  }
`;
