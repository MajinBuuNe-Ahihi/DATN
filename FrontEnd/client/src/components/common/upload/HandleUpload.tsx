import React, { useState } from 'react'
import { ButtonLoad } from './ButtonLoad'
import ImageUpload from './ImageUpload'
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/upload-image.scss'
type Props = {}

export function HandleUpload({ }: Props) {
  const [blob, setBlob] = useState<string[]>([])
  return (
    <>
    <div className="upload-images">
      {
        blob.map((item, index) =><ImageUpload key={uuidv4()} url={item} index={index} setBlob={setBlob} />)
      }
      <ButtonLoad setBlob={setBlob} />
      </div>
      <span className='upload-caution'>* them toi da 20 anh</span>
    </>
  )
}