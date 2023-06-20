import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface loginState {
  logged: boolean;
}

const initialState = {
  logged: false
} as loginState

export const loginModal = createSlice({
  name: 'loginmodal',
  initialState,
  reducers: {
    login: (state) => {
      state.logged = true;
    },
    logout: (state) => {
      state.logged = false;
    }
  }
})

export const { login, logout } = loginModal.actions

export const selectCount = (state: RootState) => {state.loginmodal.logged}

export default loginModal.reducer