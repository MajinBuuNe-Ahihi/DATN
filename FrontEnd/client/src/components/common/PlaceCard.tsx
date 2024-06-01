import React,{useState} from 'react'
import QuantityStarVote from './QuantityStarVote'
import {FaDollarSign,HiLocationMarker,FaRegClock,BsBookmark} from './Icon'
import '../../styles/place-card.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
    data: any,
}

export default function PlaceCard({data}: Props) {
    const navigate = useNavigate();
    const [price,setPrice] = useState<{min:number,max:number}>({min:0,max:300})
    const caculateTime = ()=> {
        let [hours, minutes] = data?.store?.closeTime.split(':').map(Number);
        let [hours2, minutes2] = data?.store?.openTime.split(':').map(Number);
        let timeToCompare = new Date();
        timeToCompare.setHours(hours, minutes, 0, 0);  // Set hours, minutes, seconds, and milliseconds
        let timeToCompare2 = new Date();
        timeToCompare2.setHours(hours2, minutes2, 0, 0); 
        // Get the current time
        let currentTime = new Date();
        let timeWith30MinutesDiff = new Date(timeToCompare.getTime() - 30 * 60 * 1000);
        let timeWith30MinutesDiff1 = new Date(timeToCompare2.getTime() - 30 * 60 * 1000);
        // Compare the times
        if (currentTime < timeToCompare2 && currentTime > timeWith30MinutesDiff1) {
            return "Sắp mở cửa";
        }
        if (currentTime < timeToCompare && currentTime > timeWith30MinutesDiff) {
            return "Sắp đóng cửa";
        }
        if (currentTime < timeToCompare2) {
           return "Đang đóng cửa"
        } else if (currentTime > timeToCompare) {
            return "Đang đóng cửa"
        } else {
            return "Đang mở cửa"
        }
    }
   return (
    <div className="place-card" onClick={()=> navigate(`/place/${data?.store?.storeID}`)}>
        <div className="place-card__contain">
            <div className="place-card__image">
                <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" alt="" />
            </div>
            <div className="place-card__content">
                <div className="place-card__name">
                    {data?.store.storeName}
                </div>
                <div className="place-card__vote">
                    {
                        data?.reviews.length ? <>
                    <span>{(data?.reviews?.reduce((a:any,b:any)=>{
                        return a + b.locationRate +
                        b.placeRate +
                        b.serviceRate +
                        b.foodRate+
                        b.priceRate
                    },0) / (data.reviews.length * 5))}</span><QuantityStarVote quantity={(data.reviews.reduce((a:any,b:any)=>{
                        return a + b.locationRate +
                        b.placeRate +
                        b.serviceRate +
                        b.foodRate+
                        b.priceRate
                    },0) / (data.reviews.length * 5))}></QuantityStarVote>
                     <span>-</span> <span>{data?.reviews?.length}</span> <span>đánh giá</span> 
                        </>:  <span>Chưa có đánh giá</span>
                    }
                </div>
                <div className="place-card__price">
                    <FaDollarSign size={20}></FaDollarSign> <span>{data?.store.fromPrice}{'đ'}</span> <span>-</span> <span>{data?.store.toPrice}</span> <span>{'đ'}</span>
                </div>
                <div className="place-card__place">
                    <HiLocationMarker size={20}></HiLocationMarker> <span> {data?.store.directInfo + " " + data?.store.storeAddress}</span>
                </div>
                <div className="place-card__time">
                    <FaRegClock size={20}></FaRegClock> <span>-</span> <span className="status-open">{caculateTime()}</span> <span>-</span><span>{data?.store?.openTime}</span><span>-</span><span>{data?.store?.closeTime}</span>
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