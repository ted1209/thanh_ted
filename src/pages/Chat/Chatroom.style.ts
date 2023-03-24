import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const Chatroom = styled.div<IProps>`
  grid-column: 8 / span 10;
  border-radius: 5px;
  height: 91vh;
  margin-right: 5px;
  background-color: ${(props) => props.colors.cardColor};
  position: sticky;
  top: 85px;
  padding: 20px;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: auto;
  scrollbar-track-color: red;
  padding-right: 5px;
`;

export const OtherMessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const Avatar = styled.img`
  border: none;
  border-radius: 50px;
  margin-right: 5px;
`;

export const OtherMessage = styled.div<IProps>`
  border: none;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
`;

export const OwnMessageContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row-reverse;
`;

export const OwnMessage = styled.div<IProps>`
  border: none;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  width: fit-content;
  max-width: 50%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

export const Input = styled.input<IProps>`
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  width: 90%;
  border: none;
  border-radius: 50px;
  padding: 5px 20px;
  &:focus {
    outline: none;
  }
`;

export const SendBtn = styled.div<IProps>`
  width: 50px;
  margin-left: 10px;
  color: ${(props) => props.colors.mainColor};
  &:hover {
    color: ${(props) => props.colors.disableColor};
  }
`;

export const MemberAvatar = styled.div`
  background: url('https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg');
  border: none;
  border-radius: 75px;
`;

export const MessagesLoading = styled.div``;
