import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { IColors } from '../../interfaces';
import * as Styles from './ChatroomInfo.style';

interface IChatroomInfoProps {
  colors: IColors;
  targetChatroom: any;
  handleChangeMember: (type: string, member: any) => void;
  chatroomInfoLoading: boolean;
}

const ChatroomInfo: React.FunctionComponent<IChatroomInfoProps> = ({
  colors,
  targetChatroom,
  handleChangeMember,
  chatroomInfoLoading,
}) => {
  const [settingDropdown, setSettingDropdown] = useState(false);
  const [memberDropdown, setMemberDropdown] = useState(false);
  const memberRef = useRef<any>(null);

  const handleSettingDropdown = () => {
    setSettingDropdown(!settingDropdown);
  };

  const handleMemberDropdown = () => {
    setMemberDropdown(!memberDropdown);
  };

  const handleChangeMember1 = () => {
    handleChangeMember('add', memberRef.current.value);
    memberRef.current.value = '';
  };

  return (
    <Styles.ChatroomInfo colors={colors}>
      {targetChatroom && (
        <>
          {chatroomInfoLoading ? (
            <Spinner
              animation="grow"
              variant="secondary"
              style={{ margin: '0 auto' }}
            />
          ) : (
            <Styles.AvatarContainer src={targetChatroom.image} alt="avatar" />
          )}
          <Styles.Header>{targetChatroom.name}</Styles.Header>
          <Styles.Dropdown onClick={handleSettingDropdown}>
            <h5>Settings</h5>
            {settingDropdown ? (
              <i className="fas fa-angle-down fa-lg fa-fw" />
            ) : (
              <i className="fas fa-angle-right fa-lg fa-fw" />
            )}
          </Styles.Dropdown>
          {settingDropdown && (
            <Styles.SettingItem>Change Avatar</Styles.SettingItem>
          )}
          <Styles.Dropdown onClick={handleMemberDropdown}>
            <h5>Members</h5>
            {memberDropdown ? (
              <i className="fas fa-angle-down fa-lg fa-fw" />
            ) : (
              <i className="fas fa-angle-right fa-lg fa-fw" />
            )}
          </Styles.Dropdown>

          {memberDropdown && (
            <>
              {targetChatroom.members.map((member: any, index: any) => (
                <Styles.MemberItem key={index}>
                  <Styles.Member>
                    <Styles.AvatarMember src={member.image} />
                    <p>{member.username}</p>
                  </Styles.Member>
                  <i
                    className="fas fa-times fa-lg fa-fw"
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      handleChangeMember('delete', member.username)
                    }
                  />
                </Styles.MemberItem>
              ))}
              <Styles.MemberItem>
                <Styles.InputNewMember
                  type="text"
                  colors={colors}
                  placeholder="new member ..."
                  ref={memberRef}
                />
                <i
                  className="fas fa-plus-circle fa-lg fa-fw"
                  style={{ color: colors.mainColor, cursor: 'pointer' }}
                  onClick={handleChangeMember1}
                />
              </Styles.MemberItem>
            </>
          )}
        </>
      )}
    </Styles.ChatroomInfo>
  );
};

export default ChatroomInfo;
