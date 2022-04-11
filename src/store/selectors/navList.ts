import { RootState } from '../';
import { createSelector } from '@reduxjs/toolkit';

export const memoizedNavListSelector = createSelector(
  (state: RootState) => state.navList.navList,
  (navList) => navList
);

export const memoizedNavListLoadingSelector = createSelector(
  (state: RootState) => state.navList.loading,
  (loading) => loading
);

export const memoizedNavListErrorSelector = createSelector(
  (state: RootState) => state.navList.error,
  (error) => error
);
