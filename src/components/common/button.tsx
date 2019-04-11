import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: steelblue;
  color: white;
  padding: 10px 10px;
  margin: 5px;
  min-width: 250px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    :hover {
      opacity: 0.5;
    }
  }
`;

export default Button;
