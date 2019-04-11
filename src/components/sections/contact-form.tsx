import React from 'react';
import styled from 'styled-components';
import { Button, Input, Section } from '../common';

const ContactForm = () => {
  return (
    <Section bg="white" color="#333">
      <h2>Contact us</h2>
      <div>
        <label htmlFor="email">Email Address</label>
      </div>
      <Input name="email" />
      <div />
      <textarea name="message" />
      <Button>Submit</Button>
    </Section>
  );
};

export default ContactForm;
