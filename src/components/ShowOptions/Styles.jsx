// @flow
import styled from "styled-components";
import { Button, showUp } from "./../../styles/GlobalStyles";

export const TinMarinList = styled.ul`
  background: ${({ theme }) => theme.listBG};
  height: 200px;
  list-style: none;
  margin-bottom: 10px;
  max-height: 200px;
  overflow: auto;
`;

export const TinMarinOption = styled.li`
  animation: ${showUp} 1s ease;
  background: ${({ theme }) => theme.optionBg};
  border-bottom: 2px solid ${({ theme }) => theme.listBottomBorder};
  color: ${({ theme }) => theme.fontLightColor};
  padding: 10px 25px;
  text-align: left;
`;

export const TinMarinOptionSelected = styled.li`
  background: ${({ theme }) => theme.selectedOptionBg};
  border-bottom: 2px solid ${({ theme }) => theme.listBottomBorder};
  color: ${({ theme }) => theme.fontDarkColor};
  padding: 10px 25px;
  text-align: left;
`;

export const Delete = Button.extend`
  background: ${({ theme }) => theme.deleteBtnBg};
  border: 1px solid ${({ theme }) => theme.deleteBtnBorder};
  border-radius: 50%;
  color: ${({ theme }) => theme.deleteBtnBorder};
  float: right;
  font-size: 0.9rem;
  padding-bottom: 1.5px;
  transition: 0.4s;
  text-align: center;
  width: 20px;

  &:hover {
    background: ${({ theme }) => theme.deleteBtnBgHover};
    color: ${({ theme }) => theme.fontLightColor};
    transition: 0.4s;
  }
`;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.fontLightColor};
  display: inline-block;
  margin: 84px 0 0;
`;
Delete.defaultProps = {
  theme: {
    deleteBtnBg: "#f55",
    deleteBtnBgHover: "#f33",
    deleteBtnBorder: "#aa0000"
  }
};
TinMarinList.defaultProps = {
  theme: {
    listBG: "#234"
  }
};
TinMarinOptionSelected.defaultProps = {
  theme: {
    listBottomBorder: "#aa00ee",
    fontDarkColor: "#234",
    selectedOptionBg: "#0f0"
  }
};
Placeholder.defaultProps = {
  theme: {
    fontLightColor: "#fefefe"
  }
};
