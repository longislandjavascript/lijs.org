import React from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

interface FadeInProps {
  block?: boolean;
}

const StyledFadeIn = styled.span<FadeInProps>`
  display: ${(props) => (props.block ? 'block' : 'inline')}
  animation: 1s ${fadeInAnimation};
`;

const FadeIn: React.FC<FadeInProps> = ({ children, block }) => (
  <StyledFadeIn block={true}>{children}</StyledFadeIn>
);

export default FadeIn;
