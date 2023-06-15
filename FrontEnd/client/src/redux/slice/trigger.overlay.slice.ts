import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Enums } from "@/constants";

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
      state.value = Enums.EnumsTriggerOverLay.Nothing
    },
    sidebar: (state) => {
      state.value = Enums.EnumsTriggerOverLay.Sidebar
    },
    searchmobile: (state) => {
      state.value = Enums.EnumsTriggerOverLay.SearchMobile
    },
    searchhomedesktop: (state) => {
      state.value = Enums.EnumsTriggerOverLay.SearchHome
    },
    previewimage: (state) => {
      state.value = Enums.EnumsTriggerOverLay.PreviewImage
    },
    popup: (state) => {
      state.value = Enums.EnumsTriggerOverLay.Login
    }
  }
})

export const { overlay, sidebar, searchmobile,searchhomedesktop,previewimage,popup} = TriggerOverlayandModal.actions

export const selectCount = (state: RootState) => state.trigger.value

export default TriggerOverlayandModal.reducer