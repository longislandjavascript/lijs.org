import React from 'react';
import { Section } from '../common';
import Map from '../event-map';

const About = () => {
  return (
    <Section bg="gold">
      <h2>About Our Group</h2>
      <p>
        <span style={{ fontWeight: 'bold' }}>Long Island JavaScript Group</span>{' '}
        is a space for JavaScript enthusiasts or newcomers interested in
        learning the language.
      </p>
      <p>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </p>
    </Section>
  );
};

export default About;
