import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 1.45rem 11vw;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8vw;
  @media (max-width: 768px) {
    font-size: 9vw;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </div>
  </StyledHeader>
);

export default Header;
