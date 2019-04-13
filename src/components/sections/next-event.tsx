import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button, Section } from '../common';
import CountdownClock from '../countdown-clock';
import EventMap from '../event-map';

const EventName = styled.h1`
  color: gold;
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
`;

const Container = styled.div``;

const Bold = styled.div`
  font-weight: bold;
`;

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
      <h2>-Next Event-</h2>
      {event.name && (
        <div>
          <EventName>{event.name}</EventName>
          <CountdownClock date={event.time_stamp} bg="#efefef" color="#333" />
          <Bold>{event.rsvps} are going.</Bold>
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <Button>RSVP Now!</Button>
          </a>
          <Container>
            <WhenWhereWrapper>
              <WhenWhere>When</WhenWhere>

              <Bold>{event.date}</Bold>

              <Bold>{event.time}</Bold>
            </WhenWhereWrapper>
            <WhenWhereWrapper>
              <WhenWhere>Where</WhenWhere>
              <div>
                <Bold>LaunchPad Huntington</Bold>
                <div>{event.address_street}</div>
                <div>{event.address_city_state}</div>
              </div>
            </WhenWhereWrapper>
          </Container>

          <br />

          <EventMap />
        </div>
      )}
    </Section>
  );
};

export default NextEvent;
