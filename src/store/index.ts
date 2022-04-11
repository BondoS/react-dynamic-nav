import navListSliceReducer, {
  initialState as initialNavListState,
} from './slices/navList';
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const devMode = process.env.NODE_ENV === 'development';

export const initialGlobalState = {
  navList: initialNavListState,
};

export const globalReducer = {
  navList: navListSliceReducer,
};

const sagaMiddleware = createSagaMiddleware();

const prepareStore = () => {
  const store = configureStore({
    reducer: globalReducer,
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

export type AppDispatch = typeof store.dispatch;
