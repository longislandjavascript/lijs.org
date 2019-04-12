import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { contactReasons } from '../../constants';
import { Button, Input, Section, Select, Textarea } from '../common';

const validateEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`;

// * This form is submitted to Netlify forms via the data attribute
// * on the form element.
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    reason: '',
    name: '',
    email: '',
    message: '',
  });
  const { reason, name, email, message } = formValues;
  const disabled = !message || !email || !validateEmail(email);

  const emailFontColor =
    !validateEmail(email) && email.length ? 'tomato' : '#333';

  const handleOnChange = (e: any) => {
    e.persist();
    setFormValues(v => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  const reasonOptions = contactReasons.map(r => (
    <option key={r} value={r} label={r} />
  ));

  return (
    <Section bg="#333" color="lightgray">
      <h2>Contact us</h2>
      <StyledForm
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Select value={reason} name="reason" onChange={handleOnChange}>
          {reasonOptions}
        </Select>
        <Input
          value={name}
          name="name"
          placeholder="Your Name"
          onChange={handleOnChange}
        />
        <Input
          value={email}
          name="email"
          placeholder="Your Email"
          onChange={handleOnChange}
          style={{ color: emailFontColor }}
        />

        <Textarea
          value={message}
          name="message"
          placeholder="Your Message"
          onChange={handleOnChange}
        />
        <br />
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </StyledForm>
    </Section>
  );
};

export default ContactForm;
