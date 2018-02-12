import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  & > div {
    background-color: #3498db;
    border: 12px solid #fefefe;
    border-radius: 2px;
    padding: 10px 20px;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
    width: 100%;
    & > h2 {
      color: #fefefe;
      font-size: 2rem;
      margin-bottom: 5px;
    }
    & > p {
      color: #fefefe;
      font-weight: bold;
    }
  }
`;

export default Wrapper;
