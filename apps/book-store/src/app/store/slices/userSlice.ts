import {
  createSlice,
  PayloadAction,
  isAnyOf,
  createAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { title } from 'process';
import { string } from 'zod';

export interface User {
  email: string | null;
  password: string | null;
  username: string | 'Guest' | null;
  id: number | null;
  avatar?: string;
  active?: boolean;
}

interface UserState {
  user: User;
  status: null | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  user: {
    email: null,
    password: null,
    id: null,
    active: false,
    username: 'Guest',
  },
  status: null,
};

export const actionLoginUser = createAction(
  'user/login',
  (Email: string, Password: string) => ({
    payload: {
      Email,
      Password,
    },
  })
);

export const getuserAction = createAction('user/userInfo');

const todoSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    addUser(state, actions) {
      const { email, id, password, avatar, userName } = actions.payload;
      state.user.email = email;
      state.user.id = id;
      state.user.username = userName;
      if (avatar) {
        state.user.avatar = avatar;
      }
    },
    exitUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { addUser, exitUser } = todoSlice.actions;

export default todoSlice.reducer;
