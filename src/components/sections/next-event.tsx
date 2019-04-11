import React from 'react';
import styled, { keyframes } from 'styled-components';
import FadeIn from '../animations/fade-in';
import { Button, Section } from '../common';
import EventMap from '../event-map';

const EventName = styled.h1`
  color: gold;
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
`;

const Container = styled.div``;

const WhenWhereWrapper = styled.div`
  margin: 20px;
`;

const WhenWhere = styled.div`
  font-weight: bold;
  color: gold;
`;

interface NextEventProps {
  readonly event: any;
}

const NextEvent: React.FC<NextEventProps> = ({ event }) => {
  return (
    <Section bg="#333" color="lightgray" style={{ minHeight: '300px' }}>
      <h2>Next Event</h2>
      {event.name && (
        <FadeIn block={true}>
          <EventName>{event.name}</EventName>
          <div>{event.rsvps} are going.</div>
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <Button>RSVP Now!</Button>
          </a>
          <Container>
            <WhenWhereWrapper>
              <WhenWhere>When</WhenWhere>
              <div>
                <div>{event.date}</div>
                <div>{event.time}</div>
              </div>
            </WhenWhereWrapper>
            <WhenWhereWrapper>
              <WhenWhere>Where</WhenWhere>
              <div>
                <div>
                  <b>LaunchPad Huntington</b>
                </div>
                <div>{event.address_street}</div>
                <div>{event.address_city_state}</div>
              </div>
            </WhenWhereWrapper>
          </Container>

          <br />

          <EventMap />
        </FadeIn>
      )}
    </Section>
  );
};

export default NextEvent;
