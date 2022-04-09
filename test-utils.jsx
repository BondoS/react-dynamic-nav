import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { globalReducer, initialGlobalState } from './src/store';

// A function that I normally make available for all my tests
// that deal with connected components.

// We can provide initialState or the entire store that the ui is rendered with
export const render = (
  ui,
  {
    initialState = initialGlobalState,
    store = configureStore({
      reducer: globalReducer,
      middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
