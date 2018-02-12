import styled from "styled-components";

const Header = styled.header`
  background: transparent;
  position: fixed;
  width: 100%;
  z-index: 3;
  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1170px;
  }
  nav {
    align-items: center;
    margin-right: 15px;
    display: inline-flex;

    a {
      color: #fff;
      padding: 10px 18px;
      text-decoration: none;

      &:hover {
        color: #aea;
      }
    }
  }

  h1 {
    align-items: center;
    color: #fff;
    display: inline-flex;
    font-size: 1.8em;
    padding: 10px 15px;
  }
`;

export default Header;
