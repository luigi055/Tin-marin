// @flow
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;

  & > div {
    background: ${({ theme }) => theme.lightColor};
    color: ${({ theme }) => theme.fontDarkColor};
    min-height: 50px;
    padding: 10px 5px;
    width: 50%;
  }

  & > p {
    margin-top: 5px;
  }
`;

Wrapper.defaultProps = {
  theme: {
    fontDarkColor: "#234",
    lightColor: "#fefefe"
  }
};

export default Wrapper;
