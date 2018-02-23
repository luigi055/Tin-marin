import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  & > div {
    background-color: ${({ theme }) => theme.tinMarinbg};
    border: 12px solid ${({ theme }) => theme.tinMarinBorder};
    border-radius: 2px;
    padding: 10px 20px;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
    width: 100%;
    & > h2 {
      color: ${({ theme }) => theme.fontLightColor};
      font-size: 2rem;
      margin-bottom: 5px;
    }
    & > p {
      color: ${({ theme }) => theme.fontLightColor};
      font-weight: bold;
    }
  }
`;

Wrapper.defaultProps = {
  theme: {
    tinMarinbg: "#3498db",
    fontLightColor: "#fefefe",
    tinMarinBorder: "#fefefe"
  }
};

export default Wrapper;
