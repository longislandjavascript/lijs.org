import styled, { StyledComponent } from 'styled-components';

interface SectionProps {
  bg?: string;
  color?: string;
}

const Section = styled.section<SectionProps>`
  font-family: "Roboto", sans-serif;
  width: 100%;
  background-color: ${(props) => props.bg || 'white'};
  margin: 0 auto;
  padding: 20px;
  padding-top: 20px;
  color: ${(props) => props.color || '#333'};
`;

export default Section;
