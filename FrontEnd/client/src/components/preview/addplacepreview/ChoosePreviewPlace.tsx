import React,{useEffect, useState} from 'react'
import ChoosePreViewButton from './ChoosePreViewButton';

import ChoosePreviewPlaceCard from './ChoosePreviewPlaceCard'
import Previewed from './Previewed'

type Props = {
  setStoreID: React.Dispatch<React.SetStateAction<string>>
}

export default function ChoosePreviewPlace({setStoreID}: Props) {
  const [place,setPlace] = useState<any>({});
  useEffect(()=> {
    if(place && place?.storeName?.length > 0) {
      setStoreID(place.storeID || "");
    }
  },[place]);
  return (
    <div className="preview__review-place">
      <div className="preview__section-name">
          Địa điểm
      </div>
      <div className="preview__review-place-row">
        {
          place && place.storeName?
          <ChoosePreviewPlaceCard value={place} closeCard={setPlace}></ChoosePreviewPlaceCard>
          :<ChoosePreViewButton openCard={setPlace}></ChoosePreViewButton>
        }
      </div>
      <div className="preview__section-name">
        Đánh giá gần đây
      </div>
      <div className="preview__review-place-">
        <Previewed></Previewed>
      </div>
    </div>
  )
}