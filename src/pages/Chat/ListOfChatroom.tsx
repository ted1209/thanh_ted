import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { IColors } from '../../interfaces';
import * as Styles from './Chat.style';

interface IListOfChatroomProps {
  colors: IColors;
  chatrooms: any[];
  createChatroom: (str: string) => void;
  changeTargetChatroom: (_id: string) => void;
  targetChatroom: any;
  chatroomListLoading: boolean;
}

const ListOfChatroom: React.FunctionComponent<IListOfChatroomProps> = ({
  colors,
  chatrooms,
  createChatroom,
  changeTargetChatroom,
  targetChatroom,
  chatroomListLoading,
}) => {
  const inputRef = useRef<any>(null);

  return (
    <Styles.ListOfChatRoom colors={colors}>
      <h3>Chatrooms</h3>
      <Styles.NewChatroom>
        <Styles.NewChatroomInput
          type="text"
          colors={colors}
          placeholder="New chatroom"
          ref={inputRef}
        />
        <Styles.NewChatroomBtn
          colors={colors}
          onClick={() => createChatroom(inputRef.current?.value)}
        >
          <i className="fas fa-angle-double-right fa-xs fa-fw" />
        </Styles.NewChatroomBtn>
      </Styles.NewChatroom>
      {chatroomListLoading ? (
        <Spinner
          animation="border"
          variant="secondary"
          style={{ margin: '0 auto' }}
        />
      ) : (
        <Styles.Rooms>
          {chatrooms.map((chatroom: any, index: any) =>
            chatroom._id === targetChatroom?._id ? (
              <Styles.TargetRoom
                colors={colors}
                key={index}
                onClick={() => changeTargetChatroom(chatroom._id)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-users fa-lg fa-fw" />
                    <p style={{ marginLeft: '5px' }}>{chatroom.name}</p>
                  </div>
                  <i className="fas fa-angle-double-right fa-lg fa-fw" />
                </div>
              </Styles.TargetRoom>
            ) : (
              <Styles.Room
                colors={colors}
                key={index}
                onClick={() => changeTargetChatroom(chatroom._id)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-users fa-lg fa-fw" />
                    <p style={{ marginLeft: '5px' }}>{chatroom.name}</p>
                  </div>
                  <i className="fas fa-angle-double-right fa-lg fa-fw" />
                </div>
              </Styles.Room>
            )
          )}
        </Styles.Rooms>
      )}
    </Styles.ListOfChatRoom>
  );
};

export default ListOfChatroom;
