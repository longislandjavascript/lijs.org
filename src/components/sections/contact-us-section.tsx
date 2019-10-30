import React from "react";
import styled from "styled-components";
import { Section, SectionTitle, CTAButton } from "../common";

export interface ContactUsSectionProps {}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
  return (
    <Section bg="#fff">
      <SectionTitle color="#000">Contact Us</SectionTitle>
      <ContactForm>
        <InputWrapper>
          <InputLabel>Name</InputLabel>
          <Input />
          <InputLabel>Email</InputLabel>
          <Input />
          <InputLabel>Message</InputLabel>
          <TextArea rows="5" />
        </InputWrapper>
        <CTAButton>Submit</CTAButton>
      </ContactForm>
    </Section>
  );
};

export default ContactUsSection;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 25%;
  max-width: 50%;

  @media (${props => props.theme.sm}) {
    min-width: 90%;
  }
`;

const InputLabel = styled.span`
  font-size: 36px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  outline-color: ${props => props.theme.blue};
  padding: 6px;
  margin: 0 0 30px 0;
  font-size: 18px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  outline-color: ${props => props.theme.blue};
  padding: 6px;
  margin: 0 0 30px 0;
  font-size: 18px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
