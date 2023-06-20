import React from 'react'
import { FaTimes } from './Icon'
import { useAppDispatch, useAppSelector, useCheckpoint } from '../../hooks'
import { overlay } from '../../sliceredux';
import { close } from '../../sliceredux/preview-image.slice';
import '../../styles/preview-image.scss'

type Props = {}

export  function PreviewImage({ }: Props) {
  const { open: openmodal, url: urlimage } = useAppSelector(state => state.previewimagemodal)
  const dispatch = useAppDispatch();
  const { deviceCurrent } = useCheckpoint('');
  const closePreview = () => {
    dispatch(close());
    dispatch(overlay());
  }
  return (
    <>
      {
        openmodal &&
        <div className="preview-image">
          <div className="preview-image__header">
            <div className="preview-image__close" onClick={()=>closePreview()}>
              <FaTimes size={deviceCurrent === 'mobile'? 15 : 25} className="preview-image__close-icon" />
            </div>
          </div>
          <div className="preview-image__image" style={{background: `url(${urlimage})`}}>
          </div>
        </div>
      }
    </>
  )
}