import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
      'isHamburgerMenuOpen': true,
    },
    reducers: {

        toggleHamburgerMenu: (state) => {
            state.isHamburgerMenuOpen = !state.isHamburgerMenuOpen;
        }
    }
});

export const {toggleHamburgerMenu} = appSlice.actions;

export default appSlice.reducer;