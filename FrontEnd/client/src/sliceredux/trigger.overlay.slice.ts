import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Enumrable } from "../constants";
import { number } from "yup";
/*
 value:
 0 : nothing open 
 5 : open sidebar
 6 : open search mobile
 7 : open search home
 8 : open preview image
 9 : open login Popup
 */
interface triggerState {
  value: number
}

const initialState= {
  value:0
} as triggerState

const {Overlay:OverlayEnum} = Enumrable 

export const TriggerOverlayandModal = createSlice({
  name: 'trigger',
  initialState,
  reducers: {
    Overlay: (state) => {

      state.value = OverlayEnum.Nothing
    },
    SideBar: (state) => {
      state.value = OverlayEnum.SideBar
    },
    MobileSearch: (state) => {
      state.value = OverlayEnum.MobileSearch
    },
    SearchHomeDesktop: (state) => {
      state.value = OverlayEnum.DesktopSearch
    },
    PreviewImage: (state) => {
      state.value = OverlayEnum.PreviewImage
    },
    Popup: (state) => {
      state.value = OverlayEnum.Login
    }
  }
})

export const { Overlay, SideBar, MobileSearch, SearchHomeDesktop,PreviewImage,Popup} = TriggerOverlayandModal.actions

export const selectCount = (state: RootState) => state.trigger.value

export default TriggerOverlayandModal.reducer