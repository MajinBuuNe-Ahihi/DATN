import React,{useState} from 'react'
import ChoosePreViewButton from './ChoosePreViewButton';

import ChoosePreviewPlaceCard from './ChoosePreviewPlaceCard'
import Previewed from './Previewed'

type Props = {}

export default function ChoosePreviewPlace({}: Props) {
  const [place,setPlace] = useState<boolean>(false);
  return (
    <div className="preview__review-place">
      <div className="preview__section-name">
          Địa điểm
      </div>
      <div className="preview__review-place-row">
        {
          place?
          <ChoosePreviewPlaceCard  closeCard={setPlace}></ChoosePreviewPlaceCard>
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