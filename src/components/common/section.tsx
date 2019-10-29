import styled from "styled-components";

export interface SectionProps {
  bg?: string;
}

const Section = styled.div<SectionProps>`
  background: ${({ bg }) => bg || "white"};
  padding: 4rem 1rem 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${props => props.theme.sm}) {
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
`;

export { Section };
