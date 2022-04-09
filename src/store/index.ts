import navListSliceReducer from './slices/navList';
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const prepareStore = () => {
  const store = configureStore({
    reducer: {
      navList: navListSliceReducer,
    },
    devTools: devMode,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }).concat(logger),
      sagaMiddleware,
    ],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = prepareStore();

export type RootState = ReturnType<typeof store.getState>;
