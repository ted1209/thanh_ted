import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const ContainerAll = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.colors.background};
`;

export const UserBioField = styled.div<IProps>`
  width: 60%;
  background-color: ${(props) => props.colors.cardColor};
  min-height: 350px;
  border: none;
  margin: 85px 0px 0px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserBioH1 = styled.h1<IProps>`
  color: ${(props) => props.colors.mainColor};
  margin: 0 0 5px 0;
  font-size: 50px;
`;

export const UserBioText = styled.p<IProps>`
  color: ${(props) => props.colors.fontColor};
  margin-bottom: 15px;
  font-size: 20px;
`;

export const FollowButton = styled.button<IProps>`
  color: ${(props) => props.colors.fontColor};
  margin: 20px 0 10px 0;
  padding: 10px;
  background-color: ${(props) => props.colors.mainColor};
  border: none;
  font-weight: bold;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
  }
`;

export const UserAvatar = styled.img`
  height: 230px !important;
  width: 230px !important;
  border: none;
  border-radius: 50%;
`;
export const Article = styled.div<IProps>`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.colors.cardColor};
  &:not(:first-of-type) {
    margin-bottom: 5px;
  }
  &:first-of-type {
    &:hover {
      background-color: ${(props) => props.colors.mainColor};
      cursor: pointer;
    }
  }
`;

export const UserArticlesField = styled.div<IProps>`
  width: 60%;
  background-color: ${(props) => props.colors.background};
  border: none;
  margin: 5px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.cardColor};
  color: ${(props) => props.colors.fontColor};
  padding: 10px 25px;
  outline: none !important;
  margin-right: 3px;
  &:focus,
  &:active {
    background-color: ${(props) => props.colors.mainColor};
    color: ${(props) => props.colors.fontColor};
  }
`;

export const SearchInput = styled.input<IProps>`
  border: none;
  background-color: ${(props) => props.colors.cardColor};
  width: 100%;
  height: 100%;
  color: ${(props) => props.colors.mainColor};
  border-radius: 5px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;
