import React from "react";
import styled from "styled-components";
import { Button } from "./common";

const Wrapper = styled.div`
  width: 100vw;
  background: #333;
  margin: 20px auto;
  padding: 16px;
  color: lightgray;
`;

const EventName = styled.h1`
  color: gold;
`;

const NextEvent = () => {
  return (
    <Wrapper>
      <h2>Next Event</h2>
      <EventName>TypeScript and React</EventName>
      <div>April 26th, 2019</div>
      <div>6:00 - 9:00 PM</div>
      <Button>RSVP Now!</Button>
    </Wrapper>
  );
};

export default NextEvent;
