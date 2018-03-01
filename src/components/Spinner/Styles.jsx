import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  background-image: url(/public/img/loading.png);
  background-repeact: no-repeat;
  width: 100px;
`;

export const Loading = styled.div`
  align-items: center;
  background: inherit;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  p {
    color: ${({ theme }) => theme.fontLightColor};
    font-size; 1.7rem;
  }
`;

Loading.defaultProps = {
  theme: {
    fontLightColor: "#fefefe"
  }
};
