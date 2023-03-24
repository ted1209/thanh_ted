import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const Header = styled.div<IProps>`
  background-color: ${(props) => props.colors.cardColor};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  box-shadow: 0 2px 6px ${(props) => props.colors.background};
  z-index: 1;
`;

export const Logo = styled.h1<IProps>`
  color: ${(props) => props.colors.mainColor};
`;

export const Search = styled.input<IProps>`
  border: none;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  margin-left: 30px;
  margin-top: 7px;
  width: 300px;
  height: 40px;
  border-radius: 100px;
  outline: none;
  padding: 0 20px;
`;

export const SignInButton = styled.button<IProps>`
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  padding: 10px 25px;
  border: none;
  border-radius: 100px;
  margin-right: 20px;
  transition: all 0.25s;
  outline: none !important;
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
    color: #fff;
  }
`;

export const SignUpButton = styled.button<IProps>`
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  padding: 10px 25px;
  border: none;
  border-radius: 100px;
  transition: all 0.25s;
  outline: none !important;
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100px;
`;

export const ChangeBGButton = styled.button<IProps>`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.colors.cardColor};
  color: ${(props) => props.colors.fontColor};
  padding: 0px 15px;
  outline: none !important;
  margin-left: 20px;
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
  }
`;

export const DropdownToggler = styled.div<IProps>`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div<IProps>`
  position: absolute;
  background-color: ${(props) => props.colors.cardColor};
  min-width: 50px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
