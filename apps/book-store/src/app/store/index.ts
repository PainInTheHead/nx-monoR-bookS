import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import userReducer from './slices/userSlice';
import bookReducer from './slices/bookSlice'
import rootSaga from './saga/rootSagas';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
