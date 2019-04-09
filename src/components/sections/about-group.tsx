import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import FadeIn from "../animations/fade-in";
import { Section } from "../common";

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
  photo: {
    thumb_link: string;
  };
}

interface AboutProps {
  memberCount: string;
}
const About: React.FC<AboutProps> = ({ memberCount }) => {
  const data = useStaticQuery(graphql`
    query {
      allMeetupMember {
        nodes {
          photo {
            thumb_link
          }
        }
      }
    }
  `);
  return (
    <Section bg="black" color="white">
      <h2>About Our Group</h2>

      <p>
        <span style={{ fontWeight: "bold", color: "gold" }}>
          Long Island JavaScript Group
        </span>{" "}
        is a space for JavaScript enthusiasts or newcomers interested in
        learning the language.
      </p>
      <p>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </p>
      <div style={{ margin: "10px" }}>
        <MemberCount>{memberCount} and counting!</MemberCount>
      </div>
      {data.allMeetupMember.nodes.map((member, i) => {
        if (member.photo && member.photo.thumb_link) {
          return (
            <Fragment key={member.photo.thumb_link}>
              <FadeIn>
                <Avatar height="30" width="30" src={member.photo.thumb_link} />
              </FadeIn>
            </Fragment>
          );
        }
      })}
    </Section>
  );
};

export default About;
