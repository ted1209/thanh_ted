import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const ScrollTopButton = styled.button<IProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.colors.mainColor};
  border: none;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #5ed3df;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
