import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface IMapModalState {
  openModal: boolean
}

const initialState = {
  openModal:false,
} as IMapModalState

export const MapModalSlice = createSlice({
  name: 'mapmodal',
  initialState,
  reducers: {
    OpenMapModalState: (state) => {
      console.log("heeeeeee")
      state.openModal = true;
    },
    CloseMapModalState: (state) => {
      console.log("hicccc")
      state.openModal= false;
    }
  }
})

export const { OpenMapModalState,CloseMapModalState } = MapModalSlice.actions

export const selectCount = (state: RootState) => {state.mapmodal.openModal}

export default MapModalSlice.reducer