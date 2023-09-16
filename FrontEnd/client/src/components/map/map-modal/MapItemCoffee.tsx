import React from 'react'
import { BsFillStarFill, FaTimes } from '../../common/Icon';
import './map-item-coffee.scss'
type Props = {
    RedirectLocation: ()=> void
}

export default function MapItemCoffee({RedirectLocation}: Props) {
    const defaultColor = '#5a565631';
    const activeColor = '#ee0033';
    const star = [0, 1, 2, 3, 4];

  return (
    <div className="map-item-coffee" style={{width: '100%'}} onClick={()=>RedirectLocation()}>
        <div className="map-item-coffee__main">
            <div className="map-item-coffee__name">
                The Coffee People
            </div>
            <div className="map-item-coffee__review">
                <div className="map-item-coffee__review-star">
                {
                    star.map((item) => <BsFillStarFill 
                        key={item} size={10} 
                        color={-1 < item ?
                        defaultColor : activeColor}
                        >
                    </BsFillStarFill>)
                }
                </div>
                <div className="map-item-coffee__review-count">
                    <span>chưa có đánh giá</span>
                </div>
            </div>
            <div className="map-item-coffee__address">
                số 31lk32, khu đô thị Vân Canh, Hoài Đức, Hà Nội
            </div>
            <div className="map-item-coffee__open-time">
                <span className="map-item-coffee__status">
                    Đang mở cửa
                </span>
                <span>
                    -
                </span>
                <span>
                    07:00
                </span>
                <span>
                    -
                </span>
                <span>
                    23:00
                </span>
            </div>
        </div>
        <div className="main-item-coffee__image" style={{background: 'url(https://toidicafe.vn/static/images/place/the-coffee-people/the-coffee-people-avatar-1649653420038.jpg)'}}>

        </div>
    </div>
  )
}