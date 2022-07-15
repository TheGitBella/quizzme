import styled from 'styled-components';

interface SubmitButtonProps {
  color?: string;
}

export const SubmitBtn = styled.button<SubmitButtonProps>`
  background-color: ${({ color = '#ffc90b' }) => color};
  color: #5167d5;
  font-weight: bold;
  padding: 0px;
  height: 60px;
  width: 20vw;
  font-size: 26px;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 20px;
  transition: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
