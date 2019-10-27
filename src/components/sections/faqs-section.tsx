import React from "react";
import styled from "styled-components";
import faqs from "../../constants/faqs";
import { Section, SectionTitle, Container } from "../common";
import { useTheme } from "../../hooks";

const FAQItem = styled.div`
  text-align: center;
  .question {
    font-size: 2rem;
    color: ${props => props.theme.yellow};
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }
  .answer {
    font-size: 1.5rem;
    color: white;
    margin: 8px 0px 16px 0px;
  }
`;

export type FAQSSectionProps = {};

const FAQSSection: React.FC<FAQSSectionProps> = () => {
  const { blue } = useTheme();
  const renderFAQS = faqs.map(faq => {
    return (
      <FAQItem key={faq.a}>
        <p className="question">{faq.q}</p>
        <p className="answer">{faq.a}</p>
        <hr />
        <br />
      </FAQItem>
    );
  });

  return (
    <FAQSectionSection bg={blue}>
      <FAQSectionTitle>FAQS</FAQSectionTitle>
      <Container>{renderFAQS}</Container>
    </FAQSectionSection>
  );
};

export default FAQSSection;

const FAQSectionTitle = styled(SectionTitle)`
  margin-top: 0;
`;

const FAQSectionSection = styled(Section)`
  padding-top: 0;
`;
