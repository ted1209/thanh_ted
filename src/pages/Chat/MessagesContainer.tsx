import * as React from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './Chatroom.style';

interface IMessagesContainerProps {
  messages: any;
}

const MessagesContainer: React.FunctionComponent<IMessagesContainerProps> = ({
  messages,
}) => {
  const colors = useSelector((state: any) => state.colors);
  const user = useSelector((state: any) => state.signIn.userInfo);
  return (
    <Styles.MessagesContainer>
      {messages.map((message: any, index: any) =>
        message.author.username === user.username ? (
          <Styles.OwnMessageContainer key={index}>
            <Styles.OwnMessage colors={colors}>
              {message.message}
            </Styles.OwnMessage>
          </Styles.OwnMessageContainer>
        ) : (
          <Styles.OtherMessageContainer key={index}>
            <Styles.Avatar
              src={message.author.image}
              alt="avatar"
              width="30px"
            />

            <Styles.OtherMessage colors={colors}>
              {message.message}
            </Styles.OtherMessage>
          </Styles.OtherMessageContainer>
        )
      )}
    </Styles.MessagesContainer>
  );
};

export default MessagesContainer;
