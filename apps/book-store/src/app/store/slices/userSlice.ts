import {
  createSlice,
  createAction,
} from '@reduxjs/toolkit';



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
  (email: string, password: string, navigate: (path: string) => void) => ({
    payload: {
      email,
      password,
      navigate,
    },
  })
);

export const actionRegistrationUser = createAction(
  'user/registration',
  (email: string, password: string, navigate: (path: string) => void) => ({
    payload: {
      email,
      password,
      navigate,
    },
  })
);

export const actionChangeInfo = createAction(
  'user/changeInfo',
  (email: string, userName: string) => ({
    payload: {
      email,
      userName,
    },
  })
);

export const actionChangePass = createAction(
  'user/changePass',
  (password, oldPassword) => ({
    payload: {
      password,
      oldPassword
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
      const { email, id, avatar, userName } = actions.payload;
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
      const {email, userName} = action.payload
      state.user.email = email;
      state.user.username = userName;
    },
  },
});

export const { addUser, exitUser, newAvatar, updateUserInfo } = todoSlice.actions;

export default todoSlice.reducer;
