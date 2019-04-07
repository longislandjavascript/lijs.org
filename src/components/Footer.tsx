import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #333;
  height: 40px;
  color: white;
  position: fixed;
  min-width: 100vw;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with&nbsp;
    <a href="https://www.gatsbyjs.org">
      Gatsby
      {/* <Gatsby /> */}
    </a>
    &nbsp;&amp;&nbsp;
    <a href="https://www.typescriptlang.org">
      TypeScript
      {/* <TypeScript /> */}
    </a>
  </StyledFooter>
);

export default Footer;
