import styled, { keyframes } from "styled-components";

export const showUp = keyframes`
 0% {
   opacity: 0;
 }
  100% {
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
`;
