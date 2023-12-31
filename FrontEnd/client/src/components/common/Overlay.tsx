import React,{ useEffect }from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { Overlay as OverlayRedux} from '../../sliceredux';
import { ClosePreview } from '../../sliceredux/preview-image.slice';
import { Enumrable } from '../../constants';

type Props = {}
const {SideBar,MobileSearch,PreviewImage,DesktopSearch,Login} = Enumrable.Overlay
export function Overlay({ }: Props) {
  const trigger:number = useAppSelector((state) => state.trigger.value);
  const dispatch = useAppDispatch()
  const array = [SideBar,MobileSearch,PreviewImage,DesktopSearch,Login]
  return (
    <>
      {
        (array.includes(trigger)) &&
         <div id='overlay-component' onClick={() => {
          dispatch(OverlayRedux());
          dispatch(ClosePreview());
        }}>
        </div>
    }
    </>
  )
}