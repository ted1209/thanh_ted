import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axios from 'axios';
import toastr from 'toastr';
import ListOfChatroom from './ListOfChatroom';
import Chatroom from './Chatroom';
import ChatroomInfo from './ChatroomInfo';
import * as Styles from './Chat.style';
import * as api from './api';
import { CHAT_URL } from '../../constants/index';

const Chat = () => {
  const colors = useSelector((state: any) => state.colors);
  const user = useSelector((state: any) => state.user);
  const [chatrooms, setChatrooms] = useState([]);
  const [messages, setMessages] = useState<any>([]);
  const [targetChatroom, setTargetChatroom] = useState<any>({});
  const [socket, setSocket] = useState<any>(null);
  const [memberLoading, setMemberLoading] = useState(false);
  const [chatroomListLoading, setChatroomListLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [chatroomInfoLoading, setChatroomInfoLoading] = useState(true);

  const setupSocket = () => {
    if (!socket) {
      const newSocket = io(CHAT_URL, {
        query: {
          author: user.username,
          image:
            user.image ||
            'https://static.productionready.io/images/smiley-cyrus.jpg',
        },
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    api.getChatrooms(user.username).then((data) => {
      setChatrooms(data.data);
      setTargetChatroom(data.data[0]);
      setChatroomListLoading(false);
      setChatroomInfoLoading(false);
      setupSocket();
      if (data.data[0]?._id) {
        api.getMessages(data.data[0]._id).then((data) => {
          setMessages(data.data.messages);
          setMessagesLoading(false);
        });
      }
    });
    // eslint-disable-next-line
	}, []);

  useEffect(() => {
    if (socket) {
      socket.on('newMessage', (message: any) => {
        const newMessage = message.author.image
          ? [...messages, message]
          : [
              ...messages,
              {
                message: message.message,
                author: {
                  username: message.author.username,
                  image:
                    'https://static.productionready.io/images/smiley-cyrus.jpg',
                },
              },
            ];
        setMessages(newMessage);
      });
    }
    // eslint-disable-next-line
	}, [messages]);

  const createChatroom = (str: string) => {
    api
      .createChatroom({
        name: str,
        members: [
          {
            username: user.username,
            image: user.image,
          },
        ],
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      })
      .then((data) => setChatrooms(data.data))
      .catch((err) => toastr.error(err.response.data.message));
  };

  const changeTargetChatroom = (_id: string) => {
    setMessagesLoading(true);
    setTargetChatroom(chatrooms.find((chatroom: any) => chatroom._id === _id));
    api.getMessages(_id).then((data) => {
      setMessages(data.data.messages);
      setMessagesLoading(false);
    });
  };

  const sendMessages = (message: any) => {
    socket.emit('chatroomMessage', {
      chatroomId: targetChatroom._id,
      message,
    });
  };

  const handleChangeMember = (type: string, member: any) => {
    setMemberLoading(true);
    if (
      type === 'add' &&
      !targetChatroom.members.map((item: any) => item.username).includes(member)
    ) {
      axios({
        method: 'get',
        url: `https://conduit.productionready.io/api/profiles/${member}`,
      })
        .then((data) => {
          api
            .updateChatroom({
              chatroomId: targetChatroom._id,
              members: [
                ...targetChatroom.members,
                {
                  username: data.data.profile.username,
                  image: data.data.profile.image,
                },
              ],
            })
            .then((data) => {
              setTargetChatroom(data.data);
              setMemberLoading(false);
            });
        })
        .catch((err) => toastr.error(err.response.data));
    } else if (type === 'delete') {
      const newMembers = targetChatroom.members.filter(
        (item: any) => item.username !== member
      );
      api
        .updateChatroom({
          chatroomId: targetChatroom._id,
          members: newMembers,
        })
        .then((data) => {
          setTargetChatroom(data.data);
          setMemberLoading(false);
        });
    }
  };

  return (
    <Styles.Content>
      <ListOfChatroom
        colors={colors}
        createChatroom={createChatroom}
        chatrooms={chatrooms}
        changeTargetChatroom={changeTargetChatroom}
        targetChatroom={targetChatroom}
        chatroomListLoading={chatroomListLoading}
      />
      <Chatroom
        colors={colors}
        socket={socket}
        messages={messages}
        sendMessages={sendMessages}
        messagesLoading={messagesLoading}
      />
      <ChatroomInfo
        colors={colors}
        targetChatroom={targetChatroom}
        handleChangeMember={handleChangeMember}
        chatroomInfoLoading={chatroomInfoLoading}
      />
    </Styles.Content>
  );
};

export default Chat;
