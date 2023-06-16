import React from 'react'
import {HiLocationMarker} from '../../common/Icon'

type Props = {
  openCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChoosePreViewButton({openCard}: Props) {
  return (
    <div className="preview__add-place-button" onClick={()=>openCard(pre=> !pre)}>
      <HiLocationMarker size={20}></HiLocationMarker>
      <span>Nhấn vào đây để chọn địa điểm</span>
    </div>
  )
}