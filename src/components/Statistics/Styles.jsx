// @flow
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;

  & > div {
    background: #fefefe;
    color: #234;
    min-height: 50px;
    padding: 10px 5px;
    width: 50%;
  }

  & > p {
    margin-top: 5px;
  }
`;

export default Wrapper;
