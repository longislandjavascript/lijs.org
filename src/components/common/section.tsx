import styled, { StyledComponent } from 'styled-components';

interface SectionProps {
  bg?: string;
  color?: string;
}

const Section = styled.section<SectionProps>`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: ${props => props.bg || 'white'};
  margin: 0 auto;
  padding: 20px;
  padding-top: 20px;
  color: ${props => props.color || '#333'};
  @media (max-width: 768px) {
    padding: 20px 5px;
  }
`;

export default Section;
