import styled from "styled-components";

export interface SectionProps {
  bg?: string;
}

const Section = styled.div<SectionProps>`
  background: ${({ bg }) => bg || "white"};
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Section };
