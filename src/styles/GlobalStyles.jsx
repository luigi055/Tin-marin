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
  font-family: 'Roboto', sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
