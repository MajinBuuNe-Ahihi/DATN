import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface IPreviewMultipleState {
  open: boolean,
  currentImage: string,
  listImage: Array<string>
}

const initialState= {
  open: false,
  currentImage: '',
  listImage: []
} as IPreviewMultipleState

export const PreviewMultipleImageModal = createSlice({
  name: 'previewmultipleimagemodal',
  initialState,
  reducers: {
    OpenPreview: (state,actions:PayloadAction<{currentImage:string,images:Array<string>}>) => {
      state.open = true;
      state.currentImage = actions.payload.currentImage;
      state.listImage = actions.payload.images
    },
    ClosePreview: (state) => {
      state.open = false;
      state.currentImage = '';
      state.listImage = []
    }
  }
})

export const { OpenPreview, ClosePreview } = PreviewMultipleImageModal.actions

export const selectCount = (state: RootState) => {state.previewmultipleimagemodal.open,
  state.previewmultipleimagemodal.currentImage,
  state.previewmultipleimagemodal.listImage}

export default PreviewMultipleImageModal.reducer