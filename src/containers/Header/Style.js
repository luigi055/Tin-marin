import styled from "styled-components";

const Header = styled.header`
  background: ${({ theme }) => theme.headerbg};
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
      color: ${({ theme }) => theme.lightColor};
      padding: 10px 18px;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.hoverLinks};
      }
    }
  }

  h1 {
    align-items: center;
    color: ${({ theme }) => theme.lightColor};
    display: inline-flex;
    font-size: 1.8em;
    padding: 10px 15px;
  }
`;

Header.defaultProps = {
  theme: {
    headerbg: "transparent",
    lightColor: "#fefefe",
    hoverLinks: "#aea"
  }
};

export default Header;
