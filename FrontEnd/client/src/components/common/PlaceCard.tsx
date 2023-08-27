import React,{useState} from 'react'
import QuantityStarVote from './QuantityStarVote'
import {FaDollarSign,HiLocationMarker,FaRegClock,BsBookmark} from './Icon'
import '../../styles/place-card.scss'

type Props = {}

export default function PlaceCard({}: Props) {
    const [price,setPrice] = useState<{min:number,max:number}>({min:0,max:300})
  return (
    <div className="place-card">
        <div className="place-card__contain">
            <div className="place-card__image">
                <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" alt="" />
            </div>
            <div className="place-card__content">
                <div className="place-card__name">
                    EEBakery Coffee
                </div>
                <div className="place-card__vote">
                    <span>{4.2}</span><QuantityStarVote quantity={4.2}></QuantityStarVote> <span>-</span> <span>{3}</span> <span>đánh giá</span> 
                </div>
                <div className="place-card__price">
                    <FaDollarSign size={20}></FaDollarSign> <span>{25000}{'đ'}</span> <span>-</span> <span>{55000}</span> <span>{'đ'}</span>
                </div>
                <div className="place-card__place">
                    <HiLocationMarker size={20}></HiLocationMarker> <span>116 C3 Hoàng Ngọc Phách, Đống Đa</span>
                </div>
                <div className="place-card__time">
                    <FaRegClock size={20}></FaRegClock> <span>-</span> <span className="status-open">Sắp đóng cửa</span> <span>-</span><span>07:30</span><span>-</span><span>21:30</span>
                </div>
            </div>
            <div className="place-card__bookmark">
                <div className="place-card__bookmark-button">
                    <BsBookmark size={20}></BsBookmark>
                </div>
            </div>
        </div>
    </div>
  )
}