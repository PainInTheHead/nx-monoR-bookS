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
  email: string;
  password: string | null;
  username: string | 'Guest';
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
    email: '',
    password: null,
    id: null,
    active: false,
    username: 'Guest',
  },
  status: null,
};

export const actionLoginUser = createAction(
  'user/login',
  (Email: string, Password: string, navigate: (path: string) => void) => ({
    payload: {
      Email,
      Password,
      navigate,
    },
  })
);

export const actionRegistrationUser = createAction(
  'user/registration',
  (Email: string, Password: string, navigate: (path: string) => void) => ({
    payload: {
      Email,
      Password,
      navigate,
    },
  })
);

export const actionChangeInfo = createAction(
  'user/changeInfo',
  (Email: string, UserName: string) => ({
    payload: {
      Email,
      UserName,
    },
  })
);

export const actionChangePass = createAction(
  'user/changePass',
  (Password) => ({
    payload: {
      Password
    },
  })
);



export const actionNewAvatar = createAction(
  'user/upload',
  (formData: FormData) => ({
    payload: {
      formData,
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
    newAvatar(state, action) {
      state.user.avatar = action.payload;
    },

    updateUserInfo (state, action) {
      const {Email, UserName} = action.payload
      state.user.email = Email;
      state.user.username = UserName;
    },
  },
});

export const { addUser, exitUser, newAvatar, updateUserInfo } = todoSlice.actions;

export default todoSlice.reducer;
