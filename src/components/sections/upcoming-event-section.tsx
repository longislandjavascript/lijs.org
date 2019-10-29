import React from "react";
import styled from "styled-components";
import { useMeetupNextEvent } from "../../hooks/";
import { Section, SectionTitle, CTAButton } from "../common";

export interface UpcomingEventSectionProps {}

const UpcomingEventSection: React.FC<UpcomingEventSectionProps> = () => {
  const data = useMeetupNextEvent();

  console.log(data);

  return (
    <Section bg="#000C1A">
      <SectionTitle color="#fff">Next Event</SectionTitle>
      <EventWrapper>
        <EventTitle>{data.name}</EventTitle>
        <TimeAndLocationWrapper>
          <TimeAndLocationItemWrapper>
            <span>
              <p>When:</p>
            </span>
            <p>{data.date}</p>
            <p>{`${data.startTime} - ${data.endTime}`}</p>
            <p>{`${data.going} people going`}</p>
          </TimeAndLocationItemWrapper>
          <TimeAndLocationItemWrapper>
            <span>
              <p>Where:</p>
            </span>
            <p>{data.location.name}</p>
            <p>{data.location.address}</p>
            <p>{`${data.location.city}, ${data.location.state} ${data.location.zipcode}`}</p>
          </TimeAndLocationItemWrapper>
        </TimeAndLocationWrapper>
        <CTAButton>RSVP Now!</CTAButton>
      </EventWrapper>
    </Section>
  );
};

export default UpcomingEventSection;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  max-width: 70%;

  @media (${props => props.theme.sm}) {
    max-width: 90%;
  }
`;

const EventTitle = styled.h3`
  text-align: center;
  color: ${props => props.theme.primary};
  font-size: 60px;
  border: 8px solid #fff500;
  border: ${props => `8px solid #fff500 ${props.theme.primary}`};
  border-radius: 20px;
  padding: 0.5rem 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  margin: 0.5rem 0;

  @media (${props => props.theme.sm}) {
    font-size: 30px;
  }
`;

const TimeAndLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (${props => props.theme.sm}) {
    flex-direction: column;
  }
`;

const TimeAndLocationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 35%;
  min-width: 35%;
  color: #fff;
  font-size: 42px;
  margin: 3rem 0;
  min-width: 40%;

  p {
    margin: 0.2rem 0;
  }

  span {
    color: ${props => props.theme.primary};
    text-transform: uppercase;
  }

  @media (${props => props.theme.sm}) {
    font-size: 38px;
    margin: 2rem 0;
    min-width: 85%;
  }
`;
