// sagas.ts
import { all } from 'redux-saga/effects';
import { userSaga } from './userSaga';
import { bookSaga } from './booksSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    bookSaga()
    ]);
}
