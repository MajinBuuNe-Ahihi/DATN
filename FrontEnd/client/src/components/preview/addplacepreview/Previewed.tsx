import React from 'react'
import {BsFillStarFill} from '../../common/Icon'
import './previewed.scss'

type Props = {}
 function PreviewdCard({}: Props) {
  return (
    <div className="previewed-card">
      <div className="previewed-card__container">
        <div className="previewed-card__main">
          <div className="previewed-card__avatar">
            <img src="https://lh3.googleusercontent.com/a-/AOh14GhmcnmpPwqLi-KfLHqizXlRxovjOQ7QTT_z04wO=s96-c" alt="" />
          </div>
          <div className="previewed-card__info">
            <div className="previewed-card__info-name">
              Hoàng Văn Mạnh
            </div>
            <div className="previewed-card__time">
              2 giờ trước
            </div>
          </div>
          <div className="previewed-card__star">
            <BsFillStarFill size={20} className='star'></BsFillStarFill>
            <span className='point'>{5}</span>
            <span>/ 5 điểm</span>
          </div>
        </div>
        <div className="previewed-card__text">
          Cửa hàng xịn
        </div>
      </div>
    </div>
  )
}
export default function Previewed({}: Props) {
  return (
    <div className="list-previewed">
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
      <PreviewdCard></PreviewdCard>
    </div>
  )
}