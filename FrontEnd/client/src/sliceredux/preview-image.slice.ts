import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface previewState {
  open: boolean,
  url: string
}

const initialState= {
  open: false,
  url: ""
} as previewState

export const PreviewImageModal = createSlice({
  name: 'previewimagemodal',
  initialState,
  reducers: {
    OpenPreview: (state,actions:PayloadAction<{url:string}>) => {
      state.open = true;
      state.url = actions.payload.url
    },
    ClosePreview: (state) => {
      state.open = false;
      state.url = "";
    }
  }
})

export const { OpenPreview, ClosePreview } = PreviewImageModal.actions

export const selectCount = (state: RootState) => {state.previewimagemodal.open,state.previewimagemodal.url}

export default PreviewImageModal.reducer