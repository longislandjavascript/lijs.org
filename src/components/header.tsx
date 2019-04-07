import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import SlackButton from "./SlackButton";
import GithubButton from "./GithubButton";
import MeetupButton from "./MeetupButton";

const StyledHeader = styled.header`
  padding: 3rem 11vw;
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
    <br />
    <MeetupButton />
    <SlackButton />
    <GithubButton />
  </StyledHeader>
);

export default Header;
