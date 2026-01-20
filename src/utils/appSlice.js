import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
      'isHamburgerMenuOpen': true,
    },
    reducers: {

        toggleHamburgerMenu: (state) => {
            state.isHamburgerMenuOpen = !state.isHamburgerMenuOpen;
        },

        closeHamburgerMenu: (state) => {
            state.isHamburgerMenuOpen = false;
        }
    }
});

export const {toggleHamburgerMenu, closeHamburgerMenu} = appSlice.actions;

export default appSlice.reducer;