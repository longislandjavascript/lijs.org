import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import FadeIn from '../animations/fade-in';
import { Section } from '../common';

const Avatar = styled.img`
  border-radius: 50%;
  margin: 3px;
`;

const MemberCount = styled.span`
  background: steelblue;
  color: white;
  padding: 3px 10px;
  border-radius: 15px;
`;

interface Member {
  thumbnail?: string;
}

interface AboutProps {
  memberCount: string;
  members: Member[];
}
const About: React.FC<AboutProps> = ({ memberCount, members }) => {
  return (
    <Section bg="black" color="white">
      <h2>About Our Group</h2>

      <p>
        <span style={{ fontWeight: 'bold', color: 'gold' }}>
          Long Island JavaScript Group
        </span>{' '}
        is a space for JavaScript enthusiasts or newcomers interested in
        learning the language.
      </p>
      <p>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </p>
      <div style={{ margin: '10px' }}>
        <MemberCount>{memberCount} and counting!</MemberCount>
      </div>
      {members.map((member, i) => (
        <Fragment key={member.thumbnail}>
          {member.thumbnail && (
            <FadeIn>
              <Avatar height="30" width="30" src={member.thumbnail} />
            </FadeIn>
          )}
        </Fragment>
      ))}
    </Section>
  );
};

export default About;
