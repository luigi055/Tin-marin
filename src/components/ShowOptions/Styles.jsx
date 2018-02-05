// @flow
import styled from "styled-components";
import { Button, showUp } from "./../../styles/GlobalStyles";

export const TinMarinList = styled.ul`
  border: #ea0;
  background: #2c3e50;
  height: 200px;
  list-style: none;
  margin-bottom: 10px;
  max-height: 200px;
  overflow: auto;
`;

export const TinMarinOption = styled.li`
  animation: ${showUp} 1s ease;
  background: rebeccapurple;
  border-bottom: 2px solid #aa00ee;
  color: #cecece;
  padding: 10px 25px;
  text-align: left;
`;

export const TinMarinOptionSelected = styled.li`
  background: #0f0;
  border-bottom: 2px solid #aa00ee;
  color: #333;
  padding: 10px 25px;
  text-align: left;
`;

export const Delete = Button.extend`
  background: #ff5555;
  border: 1px solid #aa0000;
  border-radius: 50%;
  color: #a00;
  float: right;
  font-size: 0.9rem;
  padding-bottom: 1.5px;
  transition: 0.4s;
  text-align: center;
  width: 20px;

  &:hover {
    background: #f33;
    color: #fff;
    transition: 0.4s;
  }
`;

export const Placeholder = styled.span`
  color: #fff;
  display: inline-block;
  margin: 84px 0 0;
`;
