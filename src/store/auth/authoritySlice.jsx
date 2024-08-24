import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  role:"" // maybe roles : []
};

export const authoritySlice = createSlice({
  name: 'auth/authority',
  initialState,
  reducers: {
    setAuthority: (state, action) => {
      state.role = action.payload
    },
  
  }
});

export const { setAuthority } = authoritySlice.actions;

export default authoritySlice.reducer;
