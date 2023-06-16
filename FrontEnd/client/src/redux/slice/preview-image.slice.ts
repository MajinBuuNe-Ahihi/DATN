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

// state theo dõi việc mở preview image
export const PreviewImageModal = createSlice({
  name: 'previewimagemodal',
  initialState,
  reducers: {
    open: (state,actions:PayloadAction<{url:string}>) => {
      state.open = true;
      state.url = actions.payload.url
    },
    close: (state) => {
      state.open = false;
      state.url = "";
    }
  }
})

export const { open, close } = PreviewImageModal.actions

export const selectCount = (state: RootState) => {state.previewimagemodal.open,state.previewimagemodal.url}

export default PreviewImageModal.reducer 