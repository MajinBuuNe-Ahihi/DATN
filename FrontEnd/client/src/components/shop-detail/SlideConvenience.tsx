import React from 'react'
import { Enumrable } from '../../constants';
import {  Autoplay, Navigation} from 'swiper';
import {Swiper,SwiperSlide } from 'swiper/react';
import {BsCarFrontFill, FaChild, FaMotorcycle, FaSmoking, FaWifi, GiCakeSlice, GiGuitar, GiSoccerBall, LiaShippingFastSolid, MdFastfood, MdPayment, MdPets, TbAirConditioning, TiWeatherPartlySunny} from '../common/Icon';
import './slide-convenience.scss'

type Props = {
  conveniences?: Array<number>
}

const convertConvenienceToComponent = (convenience: number) => {
  switch(convenience) {
    case Enumrable.Convenience.AirConditional:
      return  <div className="context">
        <TbAirConditioning size={40} />
      <span> Có điều hòa</span>
    </div>
    case Enumrable.Convenience.AllowPet:
      return  <div className="context">
        <MdPets size={40} />
      <span> Mang thú cưng</span>
    </div>
    case Enumrable.Convenience.CarPark: 
      return  <div className="context">
        <BsCarFrontFill size={40} />
      <span> Chỗ đỗ otô</span>
    </div>
      case Enumrable.Convenience.CardPayment: 
      return  <div className="context">
        <MdPayment size={40} />
      <span> Chấp nhận thanh toán thẻ</span>
    </div>
      case Enumrable.Convenience.Dessert: 
      return  <div className="context">
       <GiCakeSlice size={40} />
      <span> Bánh ngọt</span>
    </div>
      case Enumrable.Convenience.DisplayFootball: 
      return  <div className="context">
        <GiSoccerBall size={40} />
      <span> Chiếu bóng đá</span>
    </div>
      case Enumrable.Convenience.KidsPlay: 
      return  <div className="context">
       <FaChild size={40} />
      <span> Sân chơi cho trẻ</span>
    </div>
      case Enumrable.Convenience.LiveMusic: 
      return  <div className="context">
       <GiGuitar size={40} /> 
      <span> Nhạc sống</span>
    </div>
      case Enumrable.Convenience.MotoPark: 
      return  <div className="context">
        <FaMotorcycle size={40} />
      <span>Trông xe máy</span>
    </div>
      case Enumrable.Convenience.Shipping: 
      return  <div className="context">
       <LiaShippingFastSolid size={40} />
      <span> Giao tận nơi</span>
    </div>
      case Enumrable.Convenience.Smoking: 
      return <div className="context">
      <FaSmoking size={40} />
     <span> Khu vực hút thuốc</span>
   </div> 
      case Enumrable.Convenience.TakeOutFood: 
      return  <div className="context">
        <MdFastfood size={40} />
      <span> Mang đồ ăn ngo</span>
    </div>
      case Enumrable.Convenience.WeatherParty: 
      return <div className="context">
        <TiWeatherPartlySunny size={40} />
        <span> Ngoài trời</span>
      </div>
      case Enumrable.Convenience.Wifi: 
      return <div className="context">
        <FaWifi size={40}/> 
        <span> Có Wifi</span>
      </div>
  }
}

const sliceItemsConvenience = (conveniences: Array<number>)=> {
  return conveniences.map((convenience, index) => {
    return (
      <SwiperSlide key={index} >
          {
            convertConvenienceToComponent(convenience)
          }
      </SwiperSlide>
    )
  })
}

export default function SlideConvenience({conveniences}: Props) {
  const temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className="slide-feature">
        <Swiper
            slidesPerView={6}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Navigation,Autoplay]}
            className={`slide-feature__slide`}
            >
            {
              sliceItemsConvenience(temp)
            }
        </Swiper>
    </div>
  )
}