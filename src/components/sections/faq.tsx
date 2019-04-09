import React from 'react';
import styled from 'styled-components';
import { Section } from '../common';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const Q = styled.h3`
  color: steelblue;
`;

const A = styled.h5`
  color: #333;
`;

const faqs = [
  {
    q: 'Does it cost to attend an LIJS Meetup?',
    a: 'Nope. All of our events are completely free to attend.',
  },
  {
    q: 'When do you meet?',
    a:
      'We meet on the last Wednesday of every month in Huntington, NY at LaunchPad Huntington.',
  },
  {
    q: 'Can I show up if I did not RSVP?',
    a:
      'Absolutley! While we do prefer that you RSVP, this is not a requirement.',
  },
  {
    q: "I'm interested in presenting at an LIJS event. How do I do this?",
    a:
      'Great! Just get in contact with any of the organizers and we would love to discuss it further.',
  },
  {
    q: 'Do I need to bring a computer?',
    a:
      'Nope, but you can if you would like. Some people like to follow along. Some prefer to just observe. If you do want to follow along, it is recommended to have Node and your text editor of choice installed on your computer.',
  },
  {
    q: 'Can my company sponsor your group?',
    a:
      'Absolutely! We do not charge for events, so sponsorships help to cover some of our operating costs and provide food, beverages, and giveaways to our group.',
  },
  {
    q: 'Are your events streamed or posted online?',
    a: 'Not yet, but this is high on our priority list.',
  },
];

const FAQList = faqs.map(faq => {
  return (
    <div key={faq.q}>
      <Q>{faq.q}</Q>
      <A>{faq.a}</A>
    </div>
  );
});

const FAQ = () => {
  return (
    <Section>
      <Wrapper>
        <h1>FAQ</h1>
        {FAQList}
      </Wrapper>
    </Section>
  );
};

export default FAQ;
