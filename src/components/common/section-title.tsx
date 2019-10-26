import styled from "styled-components";

export interface SectionTitleProps {
  color?: string;
}

const SectionTitle = styled.h2<SectionTitleProps>`
  color: ${({ color }) => color || "#333"};
  font-size: 28px;
`;

export { SectionTitle };
