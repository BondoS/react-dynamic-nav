import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavItem {
  title: string;
  url: string | null;
  id: string;
  icon: string;
  hasAlert: null;
  children: NavItem[];
}

interface NavListState {
  loading: boolean;
  error: string | null;
  navList: NavItem[];
}

export const initialState: NavListState = {
  loading: false,
  error: null,
  navList: [],
};

export const navListSlice = createSlice({
  name: 'navList',
  initialState,
  reducers: {
    initiateImport: () => {},
    startImport: (state) => {
      state.loading = true;
    },
    importSuccess: (state, action: PayloadAction<NavItem[]>) => {
      state.loading = false;
      state.navList = action.payload;
    },
    importFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { initiateImport, startImport, importSuccess, importFail } =
  navListSlice.actions;

export default navListSlice.reducer;
