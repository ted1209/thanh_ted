import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

const loading = keyframes`
	0%: {opacity: 0}
	50%: {opacity: 1}
	100%: {opacity: 0}
`;

export const Content = styled.div`
  padding-top: 85px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
`;

export const ListOfChatRoom = styled.div<IProps>`
  grid-column: 4 / span 4;
  border-radius: 5px;
  height: 91vh;
  margin-right: 5px;
  background-color: ${(props) => props.colors.cardColor};
  position: sticky;
  top: 85px;
  padding: 30px 15px;
`;

export const NewChatroom = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const NewChatroomInput = styled.input<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  padding: 5px 10px;
  width: 90%;
`;

export const NewChatroomBtn = styled.button<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  padding: 5px 10px;
  margin-left: 5px;
`;
export const Rooms = styled.div`
  height: 80%;
  padding-right: 5px;
  overflow: auto;
`;

export const Room = styled.button<IProps>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  border: none;
  border-radius: 5px;
  margin: 5px 0;
`;

export const TargetRoom = styled.button<IProps>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
`;

export const ListChatroomLoading = styled.div<IProps>`
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.colors.background};
  height: 50px;
  animation: ${loading} 2s infinite;
`;
