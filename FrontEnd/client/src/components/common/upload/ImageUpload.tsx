import React, { useState } from 'react'
import {BsTrash,AiOutlineEye} from '../../common';
import { useAppDispatch, useAppSelector } from '@hooks/redux.hooks'
import  {open}  from '@reduxslice/preview-image.slice';
import { previewimage } from '@reduxslice/trigger.overlay.slice';

type Props = {
  url: string,
  index: number,
  setBlob: React.Dispatch<React.SetStateAction<string[]>>
}

export default function ImageUpload({ url, setBlob, index }: Props) {
  const deleteImage = () => setBlob(pre => pre.filter((_, i) => i != index));
  const dispatch = useAppDispatch();
  const openPreview = () => {
    dispatch(previewimage());
    dispatch(open({ url }));
  }

  return (
    <div className="upload-images__image" >
      <div className="upload-images__image-image" style={{background: `url(${url})`}} />
      <div className="upload-images__image-function">
        <AiOutlineEye size={16} className="upload-images__image-function-preview" onClick={()=>openPreview()}/>
        <BsTrash size={16} className="upload-images__image-function-delete" onClick={()=>deleteImage()}/>
      </div>
    </div>
  )
}