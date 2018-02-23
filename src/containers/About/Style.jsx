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
`;

About.defaultProps = {
  theme: {
    aboutbg: "#fefefe",
    aboutBorder: "#2c3e50"
  }
};

export default About;
