import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Section, Input, Textarea } from '../common';

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { email, message } = formValues;
  const disabled = !message || !email || !validateEmail(email);
  const handleSubmit = e => {
    e.preventDefault();
    alert('uau!');
  };

  const emailFontColor =
    !validateEmail(email) && email.length ? 'tomato' : '#333';

  const handleOnChange = (e: any) => {
    e.persist();
    setFormValues(v => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  return (
    <Section bg="white" color="#333">
      <h2>Contact us</h2>
      <h5>Interested in presenting at or sponsoring our events?</h5>
      <h5>Have a question? Just want to say hello?</h5>
      <h5>We would love to hear from you!</h5>
      <StyledForm
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input name="name" placeholder="Your Name" onChange={handleOnChange} />
        <Input
          name="email"
          placeholder="Your Email"
          onChange={handleOnChange}
          style={{ color: emailFontColor }}
        />

        <Textarea
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
