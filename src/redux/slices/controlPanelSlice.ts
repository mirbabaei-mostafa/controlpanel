import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ControlPanelState {
  screen: string;
  menu: boolean;
  profile: boolean;
  notification: boolean;
  chat: boolean;
  cart: boolean;
  theme: boolean;
  color: string;
  mode: "Dark" | "Light";
  rtl: boolean;
}

const initialState: ControlPanelState = {
  screen: "",
  menu: false,
  profile: false,
  notification: false,
  chat: false,
  cart: false,
  theme: false,
  color: "#03C9D7",
  mode: "Dark",
  rtl: false,
};

export const controlPanelSlice = createSlice({
  name: "cpanel",
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },
    setMenu: (state, action: PayloadAction<boolean>) => {
      state.menu = action.payload;
    },
    setProfile: (state, action: PayloadAction<boolean>) => {
      state.profile = action.payload;
    },
    setNotification: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload;
    },
    setChat: (state, action: PayloadAction<boolean>) => {
      state.chat = action.payload;
    },
    setCart: (state, action: PayloadAction<boolean>) => {
      state.cart = action.payload;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
      localStorage.setItem("themeMode", action.payload);
      setTheme(false);
    },
    setMode: (state, action: PayloadAction<"Dark" | "Light">) => {
      state.mode = action.payload;
      localStorage.setItem("themeMode", action.payload);
      setTheme(false);
    },
    setRTL: (state, action: PayloadAction<boolean>) => {
      state.rtl = action.payload;
      localStorage.setItem("rtl", action.payload ? "true" : "false");
    },
  },
});

export const {
  setScreen,
  setMenu,
  setProfile,
  setNotification,
  setChat,
  setCart,
  setTheme,
  setColor,
  setMode,
  setRTL,
} = controlPanelSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const cpanelSelector = (state: RootState) => state.cpanel;

export default controlPanelSlice.reducer;
