import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { globalReducer } from './src/store';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: globalReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }).concat(logger),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export { render };
