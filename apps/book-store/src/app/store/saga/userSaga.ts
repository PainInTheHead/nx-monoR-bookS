import {
  takeLatest,
  put,
  call,
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';
import { actionLoginUser, getuserAction } from './../slices/userSlice'; // Ваши действия
import { authorization, getUser } from '../../api/userApi';
import { addUser } from './../slices/userSlice';

function* handleUserActionLogin(action: {
  payload: { Email: string; Password: string };
}) {
  yield localStorage.clear();
  try {
    const { Email, Password } = yield action.payload;
    const data: {
      id: number;
      token: string;
      avatar: null | string;
      userName: string;
      email: string;
    } = yield call(authorization, { email: Email, password: Password });
    console.log(data);
    const { token, id, avatar, userName, email } = yield data;
    yield put(addUser({ id, email, avatar, userName }));
    yield localStorage.setItem('token', token);
  } catch (error) {
    yield console.log(error);
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
    const { id, avatar, userName, email } = yield data;
    yield put(addUser({ id, email, avatar, userName }));
  } catch (error) {
    yield console.log(error);
  }
}

export function* userSaga() {
  yield takeEvery(actionLoginUser, handleUserActionLogin);
  yield takeLeading(getuserAction, handleGetUserEffect);
}
