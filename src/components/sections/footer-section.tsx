import React from "react";
import styled from "styled-components";
import { Section } from "../common";
import FooterWaveGraphic from "../../../static/svgs/FooterWave.svg";

export interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <FooterSectionWrapper style={{ backgroundColor: "#fff" }}>
      <LIJSNameCopy>Long Island JavaScript 2019</LIJSNameCopy>
      <img src={FooterWaveGraphic} style={{ width: "100%" }} />
    </FooterSectionWrapper>
  );
};

export default FooterSection;

const FooterSectionWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LIJSNameCopy = styled.div`
  transform: translateY(155px);
  color: white;
  max-width: 245px;
  font-size: 28px;
  margin: 0;

  @media (${props => props.theme.sm}) {
    transform: translateY(60px);
  }
`;
