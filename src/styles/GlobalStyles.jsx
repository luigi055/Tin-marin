import styled, { keyframes, injectGlobal } from "styled-components";
/* eslint-disable*/
injectGlobal`
*,
*::after,
*::before {
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
}

::selection {
  background: #61dafb;
}

html, body {
  font-family: sans-serif; // 2
  line-height: 1.15; // 3
  -webkit-text-size-adjust: 100%; // 4
  -ms-text-size-adjust: 100%; // 4
  -ms-overflow-style: scrollbar; // 5
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 6
}
`;
/* eslint-enable */

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

export const Background = styled.div`
  background: rgb(63, 76, 107);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(63, 76, 107, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#3f4c6b",
      endColorstr="#3f4c6b",
      GradientType=1
    );
`;
