import React,{useState} from 'react'
import {HiLocationMarker} from '../../common/Icon'
import ChoosePlaceFormSearch from './ChoosePlaceFormSearch'

type Props = {
  openCard: React.Dispatch<React.SetStateAction<any>>
}

export default function ChoosePreViewButton({openCard}: Props) {
  const [openFormSearch,setOpenFormSearch] = useState<boolean>(false);
  return (
    <>
      <div className="preview__add-place-button" onClick={(e)=>{e.stopPropagation();setOpenFormSearch(pre=> !pre) }}>
        <HiLocationMarker size={20}></HiLocationMarker>
        <span>Nhấn vào đây để chọn địa điểm</span>
      </div>
      {
        openFormSearch && <ChoosePlaceFormSearch isOpen={openFormSearch} setClose={setOpenFormSearch} openCard={openCard}></ChoosePlaceFormSearch>
      }
    </>
  )
}