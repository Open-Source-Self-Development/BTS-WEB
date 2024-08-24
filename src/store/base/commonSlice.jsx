import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentRouteKey: '',
  sidebarOpen: JSON.parse(localStorage.getItem('sidebarOpen')) || false,
  avatarOpen: false
};

export const commonSlice = createSlice({
  name: 'base/common',
  initialState,
  reducers: {
    setCurrentRouteKey: (state, action) => {
      state.currentRouteKey = action.payload;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
      localStorage.setItem('sidebarOpen', JSON.stringify(action.payload));
    },
    setAvatarOpen: (state, action) => {
      state.avatarOpen = action.payload;
    }
  }
});

export const { setCurrentRouteKey, setSidebarOpen, setAvatarOpen } = commonSlice.actions;

export default commonSlice.reducer;
