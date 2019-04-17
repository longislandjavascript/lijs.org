import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GithubButton from '../buttons/github-button';
import MeetupButton from '../buttons/meetup-button';
import SlackButton from '../buttons/slack-button';
import ZoomIn from '../animations/zoom-in';
import Sky from '../sky';

const StyledHeader = styled.header`
  padding: 3rem 6vw;
  text-align: center;
  min-height: 50vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 9vw;
  /* font-family: Adam-Warren; */
  @media (max-width: 768px) {
    font-size: 14vw;
  }
`;

const renderHeader = data => (
  <Sky className="">
    <StyledHeader>
      <ZoomIn block={true}>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
      </ZoomIn>
      <br />
      <MeetupButton />
      <GithubButton />
      <SlackButton />
    </StyledHeader>
  </Sky>
);

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={renderHeader}
  />
);

export default Header;
