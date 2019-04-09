import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

// * Sections
import AboutGroup from '../components/sections/about-group';
import AboutSite from '../components/sections/about-site';
import NextEvent from '../components/sections/next-event';

const IndexPage = ({ data }) => {
  const memberCount = `${data.meetupGroup.members} ${data.meetupGroup.who}`;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <NextEvent event={data.meetupGroup.next_event} />
      <AboutGroup memberCount={memberCount} />
      <AboutSite />
      <h2 style={{ paddingTop: '100px' }}>The End</h2>
    </Layout>
  );
};

export const query = graphql`
  query {
    meetupGroup {
      name
      members
      who
      next_event {
        name
        link
        date
        time
        rsvps
        address_street
        address_city_state
      }
    }
  }
`;

export default IndexPage;
