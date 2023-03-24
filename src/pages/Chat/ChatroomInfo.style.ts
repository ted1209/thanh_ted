import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

export const ChatroomInfo = styled.div<IProps>`
  grid-column: 18 / span 4;
  background-color: ${(props) => props.colors.cardColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainer = styled.img`
  border: none;
  border-radius: 100px;
  width: 10vw;
  height: 10vw;
  margin-top: 50px;
`;

export const Header = styled.h4`
  margin: 10px 0 30px;
`;

export const Dropdown = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SettingItem = styled.p`
  width: 70%;
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 10px;
`;

export const Member = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarMember = styled.img`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100px;
  margin-right: 5px;
`;

export const InputNewMember = styled.input<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  width: 85%;
  margin-right: 5px;
  &::placeholder {
    padding-left: 10px;
  }
`;
