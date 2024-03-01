import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    activeMenu: true,
    currentMode: null,
    screenSize: undefined,
    noti: {
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,
    },
  },
  reducers: {
    setActive: (state, action) => {
      state.activeMenu = action.payload;
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
    setThemes: (state, action) => {
      state.currentMode = action.payload;
      Cookies.set("theme", action.payload);
    },
    handleClicked: (state, action) => {
      const { value } = action.payload;
      return {
        ...state,
        noti: {
          ...state.noti,
          [value]: true,
        },
      };
    },
  },
});

export const { setActive, setScreenSize, setThemes, handleClicked } =
  displaySlice.actions;
export default displaySlice.reducer;
