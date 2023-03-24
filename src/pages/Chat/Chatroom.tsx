import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { IColors } from '../../interfaces';
import * as Styles from './Chatroom.style';
import MessagesContainer from './MessagesContainer';

interface IChatroomProps {
  colors: IColors;
  socket: any;
  messages: any;
  sendMessages: (message: any) => void;
  messagesLoading: boolean;
}

const Chatroom: React.FunctionComponent<IChatroomProps> = ({
  colors,
  socket,
  messages,
  sendMessages,
  messagesLoading,
}) => {
  const newMessageRef = useRef<any>(null);
  const handleNewMessage = () => {
    if (socket) {
      sendMessages(newMessageRef.current.value);
    }

    newMessageRef.current.value = '';
  };
  return (
    <Styles.Chatroom colors={colors}>
      {messagesLoading ? (
        <Spinner
          animation="border"
          variant="secondary"
          style={{ margin: '0 auto' }}
        />
      ) : (
        <MessagesContainer messages={messages} />
      )}
      <Styles.InputContainer>
        <Styles.Input
          type="text"
          colors={colors}
          ref={newMessageRef}
          placeholder="New message"
        />
        <Styles.SendBtn colors={colors} onClick={handleNewMessage}>
          <i className="fas fa-paper-plane fa-lg fa-fw" />
        </Styles.SendBtn>
      </Styles.InputContainer>
    </Styles.Chatroom>
  );
};

export default Chatroom;
