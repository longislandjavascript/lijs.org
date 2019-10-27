import React from "react";
import styled from "styled-components";

export type CTAButtonProps = {
  children: React.ReactNode;
};

const CTAButton: React.FC<CTAButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export { CTAButton };

const Button = styled.button`
  background-color: ${props => props.theme.blue};
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 24px;
  font-weight: bold;
  font-size: 28px;
  margin: 40px 0;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    cursor: pointer;
    background-color: #0073dd;
  }
`;
