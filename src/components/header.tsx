import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GithubButton from './buttons/github-button';
import MeetupButton from './buttons/meetup-button';
import SlackButton from './buttons/slack-button';

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
    <GithubButton />
    <SlackButton />
  </StyledHeader>
);

export default Header;
