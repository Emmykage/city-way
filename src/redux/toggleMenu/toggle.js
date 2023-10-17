import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleMenu: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setToggleMenu: (state) => ({
      ...state,
      toggleMenu: !state.toggleMenu,

    }),

  },
});

export default menuSlice.reducer;
export const { setToggleMenu } = menuSlice.actions;
