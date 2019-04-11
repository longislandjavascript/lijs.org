import React from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

interface FadeInProps {
  readonly block?: boolean;
  readonly duration?: string;
}

const StyledFadeIn = styled.span<FadeInProps>`
  display: ${(props) => (props.block ? 'block' : 'inline')};
  animation: ${(props) => props.duration || '1'}s ${fadeInAnimation};
`;

const FadeIn: React.FC<FadeInProps> = ({ children, block }) => (
  <StyledFadeIn block={block}>{children}</StyledFadeIn>
);

export default FadeIn;
