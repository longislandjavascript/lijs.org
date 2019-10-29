import React from "react";
import styled from "styled-components";
import { useSponsorButtons } from "../../hooks";
import { useTheme } from "../../theme";
import { Section, SectionTitle, IconButton } from "../common";

const ButtonGroup = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  width: 600px;
  margin: 0 auto;
`;

const SponsorsSection: React.FC = () => {
  const { darkblue } = useTheme();
  const images = useSponsorButtons();
  const renderSponsorButtons = images.map(({ src, link }) => {
    return <IconButton key={link} src={src} link={link} />;
  });
  return (
    <Section bg={darkblue}>
      <SectionTitle>Sponsors</SectionTitle>
      <ButtonGroup>{renderSponsorButtons}</ButtonGroup>
    </Section>
  );
};

export default SponsorsSection;
