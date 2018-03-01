import styled from "styled-components";

const About = styled.div`
  background: inherit;
  height: 700px;
  padding-top: 60px;
  & > div {
    background: ${({ theme }) => theme.aboutbg};
    border: 12px solid ${({ theme }) => theme.aboutBorder};
    margin: 0 auto;
    max-width: 870px;
    padding: 45px 40px;
  }

  h2 {
    font-size: 1.9rem;
  }
  a {
    color: #28c;
    display: block;
    margin-top: 15px;
    text-decoration: none;

    &:hover {
      color: #39e;
    }
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    margin-top: 15px;
  }
`;

About.defaultProps = {
  theme: {
    aboutbg: "#fefefe",
    aboutBorder: "#2c3e50",
    hoverLinks: "#f90",
    activeLinks: "#f90"
  }
};

export default About;
