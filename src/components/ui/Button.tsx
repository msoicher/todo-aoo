import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: #2196F3;
  &:hover {
    background: #0b7dda;
  }
`;

export const DangerButton = styled(Button)`
  background-color: #f44336;
  &:hover {
    background-color: #da190b;
  }
`;

export const WarningButton = styled(Button)`
  background-color: #ff9800;
  &:hover {
    background-color: #e68a00;
  }
`;
