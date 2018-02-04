import styled, { keyframes } from "styled-components";

const showUp = keyframes`
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

export const Wrapper = styled.div`
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

export const AddButton = Button.extend`
  background: #f90;
  font-weight: bold;
  padding: 12px 5px;
  width: 100%;
`;

export const GetButton = Button.extend`
  background: #0f0;
  letter-spacing: 2px;
  padding: 12px 5px;
  font-weight: bold;
  width: 50%;
`;

export const RemoveButton = Button.extend`
  background: #ff1111;
  color: #fefefe;
  font-weight: bold;
  padding: 12px 5px;
  width: 50%;
`;

export const AddForm = styled.form`
  margin: 10px 0;

  input {
    display: inline-block;
    width: 100%;
    padding: 12px 5px;
  }
`;

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
  border: 2px solid #ff3333;
  border-radius: 50%;
  float: right;
  padding: 0.5px 3px;
  font-size: 0.9rem;
`;

export const Placeholder = styled.span`
  color: #fff;
  display: inline-block;
  margin: 84px 0 0;
`;

export const StatisticsWrapper = styled.div`
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
