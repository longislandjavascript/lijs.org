import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 1.45rem 0px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 10vw;
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
