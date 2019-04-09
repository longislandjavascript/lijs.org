import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GithubButton from './buttons/github-button';
import MeetupButton from './buttons/meetup-button';
import SlackButton from './buttons/slack-button';

const StyledHeader = styled.header`
  padding: 3rem 6vw;
  text-align: center;
  min-height: 50vh;
`;

const Title = styled.h1`
  font-size: 9vw;
  /* font-family: Adam-Warren; */
  @media (max-width: 768px) {
    font-size: 10vw;
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
    <GithubButton />
    <SlackButton />
  </StyledHeader>
);

export default Header;
