import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { Overlay as OverlayRedux} from '../../sliceredux';
import { ClosePreview } from '../../sliceredux/preview-image.slice';
import { Enumrable } from '../../constants';

type Props = {}
const {SideBar,MobileSearch,PreviewImage,DesktopSerch,Login} = Enumrable.Overlay
export function Overlay({ }: Props) {
  const trigger:number = useAppSelector((state) => state.trigger.value)
  const dispatch = useAppDispatch()
  const array = [SideBar,MobileSearch,PreviewImage,DesktopSerch,Login]
  return (
    <>
      {
        (array.includes(trigger)) &&
         <div id='Overlay-component' onClick={() => {
          dispatch(OverlayRedux());
          dispatch(ClosePreview());
        }}>

    </div>
    }
    </>
  )
}