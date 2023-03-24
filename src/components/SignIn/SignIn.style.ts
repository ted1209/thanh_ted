import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const ContainerAll = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.colors.background};
`;

export const SignInContainer = styled.div<IProps>`
  background-color: ${(props) => props.colors.cardColor};
  width: 70%;
  height: 700px;
  border: none;
  margin-top: 100px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SignInHeaderText = styled.h1<IProps>`
  color: ${(props) => props.colors.mainColor};
  margin: 50px 0;
  font-size: 50px;
`;

export const SignInInputs = styled.input<IProps>`
  background-color: ${(props) => props.colors.background};
  text-align: center;
  font-size: 25px;
  padding: 15px;
  margin-bottom: 16px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.colors.mainColor};
  &:focus {
    outline: none;
  }
  width: 100%;
`;

export const SignInButton = styled.button<IProps>`
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  width: 100%;
  margin: 32px 0 25px 0;
  border: none;
  font-size: 25px;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
  }
  &:focus {
    outline: none;
  }
`;
export const FormSignIn = styled.form<IProps>`
  background-color: ${(props) => props.colors.cardColor};
  width: 100%;
  height: 500px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SmallText = styled.small`
  margin-bottom: 10px;
  color: red;
`;
