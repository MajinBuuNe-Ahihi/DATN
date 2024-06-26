import React from 'react'
import QuantityStarVote from '../../common/QuantityStarVote';
import {FaTimes, BsFillStarFill} from '../../common';
type Props = {
  closeCard: React.Dispatch<React.SetStateAction<any>>
  value: any
}

export default function ChoosePreviewPlaceCard({closeCard,value}: Props) {

  return (
    <div className="preview__place-card">
      <div className="preview__place-card-close " onClick={() => closeCard({})}>
        <FaTimes size={15}></FaTimes>
      </div>
      <div className="preview__place-card-contain">
        <div className="preview__place-card-image" style={{backgroundImage: "url(https://toidicafe.vn/static/images/place/7th-heaven-cafe-brunch/7th-heaven-cafe-brunch-avatar.jpg)"}}>
        </div>
        <div className="preview__place-card-main">
          <div className="preview__place-card-name">
           {value.storeName}
          </div>
          <div className="preview__place-card-address">
            {value.directInfo + " " + value.storeAddress}
          </div>
          <div className="preview__place-card-info">
            {
              false ?
            <div className="preview__place-card-no-previewed">
              <BsFillStarFill size={18} className="preview__place-card-star"></BsFillStarFill>
              <span>Chưa có đánh giá</span>
            </div>:
            <div className="preview__place-card-quantity-previewed">
              <span>4.2</span>
              <QuantityStarVote quantity={4.2}></QuantityStarVote>
              <span>-</span>
              <span>6 đánh giá</span>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}