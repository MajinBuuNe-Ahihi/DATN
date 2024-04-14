import React from 'react'
import {PiShareNetworkBold } from '../common/Icon'
import './positive-user.scss'

type Props = {}

export default function PositiveUser({}: Props) {
  return (
    <div className="positive-user">
    <div className="positive-user__header">
       <h4>Người dùng tích cực</h4>
    </div>
    <div className="positive-user__contain"> 
        <div className="positive-user__item">
            <div className="positive-user__image">
                <img src="https://toidicafe.vn/static/images/place/seven-coffee/seven-coffee-avatar-1649655622034.jpg?w=60&h=60" alt="" />
            </div>
            <div className="positive-user__description">
                <div className="positive-user__name">
                    Seven caffe
                </div>
                <div className="positive-user__location">
                    <span><b style={{color:"black"}}>39</b> đánh giá</span> <div className="follows">
                        <PiShareNetworkBold size={20} /> Theo dõi
                    </div>
                </div>
            </div>
        </div>
        <div className="positive-user__item">
            <div className="positive-user__image">
                <img src="https://toidicafe.vn/static/images/place/seven-coffee/seven-coffee-avatar-1649655622034.jpg?w=60&h=60" alt="" />
            </div>
            <div className="positive-user__description">
                <div className="positive-user__name">
                    Seven caffe
                </div>
                <div className="positive-user__location">
                    <span><b style={{color:"black"}}>39</b> đánh giá</span> <div className="follows">
                        <PiShareNetworkBold size={20} /> Theo dõi
                    </div>
                </div>
            </div>
        </div>
        <div className="positive-user__item">
            <div className="positive-user__image">
                <img src="https://toidicafe.vn/static/images/place/seven-coffee/seven-coffee-avatar-1649655622034.jpg?w=60&h=60" alt="" />
            </div>
            <div className="positive-user__description">
                <div className="positive-user__name">
                    Seven caffe
                </div>
                <div className="positive-user__location">
                    <span><b style={{color:"black"}}>39</b> đánh giá</span> <div className="follows">
                        <PiShareNetworkBold size={20} /> Theo dõi
                    </div>
                </div>
            </div>
        </div>
        <div className="positive-user__item">
            <div className="positive-user__image">
                <img src="https://toidicafe.vn/static/images/place/seven-coffee/seven-coffee-avatar-1649655622034.jpg?w=60&h=60" alt="" />
            </div>
            <div className="positive-user__description">
                <div className="positive-user__name">
                    Seven caffe
                </div>
                <div className="positive-user__location">
                    <span><b style={{color:"black"}}>39</b> đánh giá</span> <div className="follows">
                        <PiShareNetworkBold size={20} /> Theo dõi
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}