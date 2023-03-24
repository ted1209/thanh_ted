import axios from 'axios';
import { CHAT_URL } from '../../constants/index';

export const getChatrooms = (username: string) =>
  axios({
    method: 'get',
    url: `${CHAT_URL}/chatroom/${username}`,
  });

export const createChatroom = (data: any) =>
  axios({
    method: 'post',
    url: `${CHAT_URL}/chatroom`,
    data,
  });

export const updateChatroom = (data: any) =>
  axios({
    method: 'put',
    url: `${CHAT_URL}/chatroom`,
    data,
  });

export const deleteChatroom = (chatroomId: string) =>
  axios({
    method: 'DELETE',
    url: `${CHAT_URL}/chatroom`,
    data: {
      chatroomId,
    },
  });

export const getMessages = (chatroomId: string) =>
  axios({
    method: 'get',
    url: `${CHAT_URL}/message/${chatroomId}`,
  });

export const createMessage = (data: any) =>
  axios({
    method: 'post',
    url: `${CHAT_URL}/message`,
    data,
  });
