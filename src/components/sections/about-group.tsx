import React from 'react';
import styled from 'styled-components';
import { Section } from '../common';
import MembersList from '../members-list';

const Avatar = styled.img`
  border-radius: 50%;
  margin: 3px;
`;

const MemberCount = styled.div`
  background: steelblue;
  color: white;
  padding: 3px 10px;
  border-radius: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const GroupName = styled.span`
  font-weight: bold;
  color: gold;
`;

interface Member {
  readonly photo: {
    readonly thumb_link: string;
  };
}

interface AboutProps {
  readonly memberCount: string;
}
const About: React.FC<AboutProps> = ({ memberCount }) => {
  return (
    <Section bg="black" color="white">
      <h2>About Our Group</h2>

      <p>
        <GroupName>Long Island JavaScript Group</GroupName> is a space for
        JavaScript enthusiasts or newcomers interested in learning the language.
      </p>
      <p>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </p>
      <div style={{ margin: '10px' }}>
        <MemberCount>{memberCount} and counting!</MemberCount>
      </div>
      <MembersList />
    </Section>
  );
};

export default About;
