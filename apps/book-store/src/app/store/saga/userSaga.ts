import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';
import {
  actionLoginUser,
  getuserAction,
  newAvatar,
  actionNewAvatar,
  actionChangeInfo,
  updateUserInfo,
  actionChangePass,
  actionRegistrationUser,
} from './../slices/userSlice';
import {
  authorization,
  getUser,
  newAvatarAsync,
  newUserDataAsync,
  newUserPassAsync,
  registration,
} from '../../api/userApi';
import { addUser } from './../slices/userSlice';
import { toast } from 'react-hot-toast';
import { appRoutes } from '@book-store/BookStoreLibrary';

const { homePath, loginPath } = appRoutes;


function* handleUserActionLogin(action: {
  payload: {
    email: string;
    password: string;
    navigate: (path: string) => void;
  };
}) {
  localStorage.clear();
  try {
    const data: {
      id: number;
      token: string;
      avatar: null | string;
      userName: string;
      email: string;
    } = yield call(authorization, { email: action.payload.email, password: action.payload.password });

    const { token, id, avatar, userName, email } = data;
    yield put(addUser({ id, email, avatar, userName }));
    localStorage.setItem('token', token);
    toast.success('Authorization success!', {
      icon: '✅',
    });
    action.payload.navigate(homePath);
  } catch (error) {
    toast.error('Authorization failure!', {
      icon: '❌',
    });
  }
}

function* handleGetUserEffect() {
  try {
    const data: {
      id: number;
      avatar: null | string;
      userName: string;
      email: string;
    } = yield call(getUser);
    if (!data) {
      return;
    }
    const { id, avatar, userName, email } = data;
    yield put(addUser({ id, email, avatar, userName }));
  } catch (error) {
    toast.error('For a full set of functions, log in to our website', {
      icon: '✨',
    });
  }
}

function* handleNewAvatar(action: { payload: { formData: FormData } }) {
  try {
    const formData: FormData = action.payload.formData;
    const response: string = yield call(newAvatarAsync, { formData: formData });
    const filename: string = response;
    yield put(newAvatar(filename));
    toast.success('Update user avatar success!');
  } catch (error) {
    toast.error('Update user avatar failed!');
  }
}

function* handleChangeUserInfo(action: {
  payload: { email: string; userName: string };
}) {
  try {
    const response: { email: string; userName: string } = yield call(
      newUserDataAsync,
      {
        email: action.payload.email,
        userName: action.payload.userName,
      }
    );
    yield put(
      updateUserInfo({ email: response.email, userName: response.userName })
    );
    toast.success('Update user information success!');
  } catch (error) {
    toast.error('Update user information failed!');
  }
}

function* handleChangePass(action: {
  payload: { password: string; oldPassword: string };
}) {
  try {
    const response: string = yield call(newUserPassAsync, {
      password: action.payload.password,
      oldPassword: action.payload.oldPassword,
    });
    toast.success('Update password success!');
  } catch (error) {
    toast.error('Update password failed!');
  }
}

function* handleRegistration(action: {
  payload: {
    email: string;
    password: string;
    navigate: (path: string) => void;
  };
}) {
  try {
    const response: string = yield call(registration, {
      email: action.payload.email,
      password: action.payload.password,
    });
    toast.success('Registration completed successfully', {
      icon: '✅',
    });
    action.payload.navigate(loginPath);
  } catch (error) {
    toast.error('An error occurred during registration', {
      icon: '❌',
    });
  }
}

export function* userSaga() {
  yield takeEvery(actionLoginUser, handleUserActionLogin);
  yield takeLeading(getuserAction, handleGetUserEffect);
  yield takeLeading(actionNewAvatar, handleNewAvatar);
  yield takeLeading(actionChangeInfo, handleChangeUserInfo);
  yield takeLeading(actionChangePass, handleChangePass);
  yield takeLeading(actionRegistrationUser, handleRegistration);
}
