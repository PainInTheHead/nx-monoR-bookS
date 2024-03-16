import {
  takeLatest,
  put,
  call,
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';
import {
  actionLoginUser,
  getuserAction,
  newAvatar,
  actionNewAvatar,
  actionChangeInfo,
  updateUserInfo,
  actionChangePass,
  actionRegistrationUser,
} from './../slices/userSlice'; // Ваши действия
import {
  authorization,
  getUser,
  newAvatarAsync,
  newUserDataAsync,
  newUserPassAsync,
  registration,
} from '../../api/userApi';
import { addUser } from './../slices/userSlice';
import { useNavigate } from 'react-router-dom';

function* handleUserActionLogin(action: {
  payload: {
    Email: string;
    Password: string;
    navigate: (path: string) => void;
  };
}) {
  yield localStorage.clear();
  try {
    const { Email, Password } = action.payload;
    const data: {
      id: number;
      token: string;
      avatar: null | string;
      userName: string;
      email: string;
    } = yield call(authorization, { email: Email, password: Password });

    const { token, id, avatar, userName, email } = data;
    yield put(addUser({ id, email, avatar, userName }));
    localStorage.setItem('token', token);
    action.payload.navigate('/');
  } catch (error) {
    console.log(error);
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

function* handleNewAvatar(action: { payload: { formData: FormData } }) {
  try {
    const formData: FormData = yield action.payload.formData;
    const response: string = yield call(newAvatarAsync, { formData: formData });
    const filename: string = yield response;
    yield put(newAvatar(filename));
  } catch (error) {
    yield console.log(error);
  }
}

function* handleChangeUserInfo(action: {
  payload: { Email: string; UserName: string };
}) {
  try {
    const { Email, UserName } = yield action.payload;
    const response: { email: string; userName: string } = yield call(
      newUserDataAsync,
      {
        Email: Email,
        UserName: UserName,
      }
    );
    console.log(response);
    yield put(
      updateUserInfo({ Email: response.email, UserName: response.userName })
    );
  } catch (error) {
    yield console.log(error);
  }
}

function* handleChangePass(action: { payload: { Password: string } }) {
  try {
    const response: string = yield call(newUserPassAsync, {
      Password: action.payload.Password,
    });
    console.log(response);
  } catch (error) {
    yield console.log(error);
  }
}

// actionRegistrationUser
// registration

function* handleRegistration(action: {
  payload: {
    Email: string;
    Password: string;
    navigate: (path: string) => void;
  };
}) {
  try {
    const response: string = yield call(registration, {
      Email: action.payload.Email,
      Password: action.payload.Password,
    });
    action.payload.navigate('/login')
  } catch (error) {
    yield console.log(error);
    alert(error);
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
