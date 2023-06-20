import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
/*
 value:
 0 : nothing open 
 5 : open sidebar
 6 : open search mobile
 7 : open search home
 8 : open preview image
 9 : open login popup
 */
interface triggerState {
  value: number
}

const initialState= {
  value:0
} as triggerState

export const TriggerOverlayandModal = createSlice({
  name: 'trigger',
  initialState,
  reducers: {
    overlay: (state) => {
      state.value = 0
    },
    sidebar: (state) => {
      state.value = 5
    },
    searchmobile: (state) => {
      state.value = 6
    },
    searchhomedesktop: (state) => {
      state.value = 7
    },
    previewimage: (state) => {
      state.value = 8
    },
    popup: (state) => {
      state.value = 9
    }
  }
})

export const { overlay, sidebar, searchmobile,searchhomedesktop,previewimage,popup} = TriggerOverlayandModal.actions

export const selectCount = (state: RootState) => state.trigger.value

export default TriggerOverlayandModal.reducer