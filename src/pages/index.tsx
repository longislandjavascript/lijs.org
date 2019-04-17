import { graphql } from 'gatsby';
import React, { ReactComponentElement, useRef, useEffect } from 'react';
import { Section } from '../components/common';
import Layout from '../components/layout';
import SEO from '../components/seo';
import axios from 'axios';

// * Sections
import AboutGroup from '../components/sections/about-group';
import AboutSite from '../components/sections/about-site';
import ContactForm from '../components/sections/contact-form';
import FAQ from '../components/sections/faq';
import Header from '../components/sections/header';
import NextEvent from '../components/sections/next-event';
import TheEnd from '../components/sections/the-end';

const IndexPage = ({ data }) => {
  const formRef = useRef(null);
  const memberCount = `${data.meetupGroup.members} ${data.meetupGroup.who}`;

  useEffect(() => {
    const URI = '/.netlify/functions/fetchNextMeetupEvent';
    axios.get(URI).then(res => {
      console.log('THE DATA IS', res.data);
    });
  }, []);

  return (
    <>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
        <NextEvent event={data.meetupGroup.next_event} />
        <AboutGroup memberCount={memberCount} />
        <FAQ />
        <ContactForm />
        <AboutSite />
        <TheEnd />
      </Layout>
    </>
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
        time_stamp
        venue
        rsvps
        address_street
        address_city_state
      }
    }
  }
`;

export default IndexPage;
