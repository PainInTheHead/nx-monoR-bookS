// sagas.ts
import { all } from 'redux-saga/effects';
import { userSaga } from './userSaga'; // Ваша saga

export default function* rootSaga() {
  yield all([userSaga()]);
}
