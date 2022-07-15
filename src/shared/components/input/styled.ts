import styled from 'styled-components';

export const InputCSS = styled.input`
  height: 60px;
  width: 20vw;
  color: black;
  font-size: 26px;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  &::placeholder {
    color: black;
    font-weight: lighter;
  }
`;
