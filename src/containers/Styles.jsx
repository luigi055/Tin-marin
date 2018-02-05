import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #3498db;
  border: 12px solid #fefefe;
  border-radius: 2px;
  padding: 10px 20px;
  max-width: 500px;
  width: 100%;
  & > h1 {
    color: #fefefe;
    margin-bottom: 5px;
  }
  & > p {
    color: #fefefe;
    font-weight: bold;
  }
`;

export default Wrapper;
