import React from 'react';
import styled from 'styled-components';
import { faqs } from '../../constants';
import { Section } from '../common';

const Title = styled.h1`
  background: gold;
  color: #333;
  padding: 5px;
`;
const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const Q = styled.h3`
  color: gold;
`;

const A = styled.p`
  line-height: 22px;
  color: lightgray;
`;

const FAQList = faqs.map(faq => {
  return (
    <div key={faq.q}>
      <Q>{faq.q.toUpperCase()}</Q>
      <A>{faq.a}</A>
      <hr style={{ borderTop: '1px dashed steelblue' }} />
    </div>
  );
});

const FAQ = () => {
  return (
    <Section bg="black" color="white">
      <Wrapper>
        <Title>FAQ</Title>
        {FAQList}
      </Wrapper>
    </Section>
  );
};

export default FAQ;
