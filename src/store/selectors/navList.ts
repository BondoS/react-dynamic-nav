import { RootState } from '../';
import { createSelector } from '@reduxjs/toolkit';

export const memoizedNavListSelector = createSelector(
  (state: RootState) => state.navList.navList,
  (navList) => navList
);
