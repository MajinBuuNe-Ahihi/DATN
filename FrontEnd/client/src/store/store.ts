import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../sliceredux/login.slice'
import previewImageSlice from '../sliceredux/preview-image.slice'
import triggerOverlaySlice from '../sliceredux/trigger.overlay.slice'
import previewMultipleImageSlice from '../sliceredux/preview-multiple-image.slice'
import mapModalSlice from '../sliceredux/modal-map.slice'

// ...

export const store = configureStore({
  reducer: {
    trigger: triggerOverlaySlice,
    previewimagemodal: previewImageSlice,
    loginmodal: loginSlice,
    previewmultipleimagemodal:previewMultipleImageSlice,
    mapmodal: mapModalSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch