import React, { ChangeEvent } from 'react'
import {AiOutlineCamera  } from '../Icon'

type Props = {
  setBlob: React.Dispatch<React.SetStateAction<string[]>>
}

export function ButtonLoad({ setBlob }: Props) {
  let loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    if (target.files && target.files[0])
    {
      let file = target.files[0] as File;
      let url = URL.createObjectURL(file);
      setBlob(pre => pre.length >= 20?pre:[url, ...pre]);
    }
  }
  return (
    <label htmlFor='upload-image' className="upload-images__area-input">
      <AiOutlineCamera  size={25} className={"upload-images__area-input-icon-plus"} />
      <input style={{ opacity: 0 }} type="file" accept='image/*' name="upload-image" id="upload-image" onChange={(e: ChangeEvent<HTMLInputElement>)=>loadImage(e) } />
    </label>
  )
}