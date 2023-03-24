import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { IColors } from '../../interfaces';

interface IColor {
  colors: IColors;
}

const changeOpacity = keyframes`
  0% {opacity: 0.5}
  50% {opacity: 1}
  100% {opacity: 0.5}
`;

const changeWidthAndOpacity = keyframes`
  0% {width: 100px; opacity: 0.5}
  50% {width: 150px; opacity: 1}
  100% {width: 100px; opacity: 0.5}
`;

const changeWidthAndOpacity2 = keyframes`
  0% {width: 300px; opacity: 0.5}
  50% {width: 400px; opacity: 1}
  100% {width: 300px; opacity: 0.5}
`;

const changeWidthAndOpacity3 = keyframes`
  0% {width: 400px; opacity: 0.5}
  50% {width: 500px; opacity: 1}
  100% {width: 400px; opacity: 0.5}
`;

export const Load = styled.div`
  transition: all 1s;
`;

export const LoadCont = styled.div<IColor>`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 5px;
  background-color: ${(props: any) => props.colors.cardColor};
  color: ${(props: any) => props.colors.fontColor};
`;

export const LoadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LoadUser = styled.div`
  display: flex;
`;

export const LoadAvatar = styled.div<IColor>`
  border: none;
  border-radius: 50px;
  background-color: ${(props: any) => props.colors.background};
  width: 35px;
  height: 35px;
  margin-right: 5px;
  animation: ${changeOpacity} 2.5s infinite ease-in;
`;

export const LoadingName = styled.div<IColor>`
  border: none;
  border-radius: 50px;
  background-color: ${(props: any) => props.colors.background};
  height: 35px;
  animation: ${changeWidthAndOpacity} 2.5s infinite ease-in-out;
`;

export const LoadingContent1 = styled.div<IColor>`
  border: none;
  border-radius: 50px;
  background-color: ${(props: any) => props.colors.background};
  width: 300px;
  height: 35px;
  margin-top: 5px;
  animation: ${changeWidthAndOpacity2} 2.5s infinite ease-in-out;
`;

export const LoadingContent2 = styled.div<IColor>`
  border: none;
  border-radius: 50px;
  background-color: ${(props: any) => props.colors.background};
  width: 400px;
  height: 35px;
  margin-top: 5px;
  animation: ${changeWidthAndOpacity3} 2.5s infinite ease-in-out;
`;
