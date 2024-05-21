import React from 'react'
import { Enumrable } from '../../constants';
import {  Autoplay, Navigation} from 'swiper';
import {Swiper,SwiperSlide } from 'swiper/react';
import {BsCarFrontFill, FaChild, FaMotorcycle, FaSmoking, FaWifi, GiCakeSlice, GiGuitar, GiSoccerBall, LiaShippingFastSolid, MdFastfood, MdPayment, MdPets, TbAirConditioning, TiWeatherPartlySunny} from '../common/Icon';
import './slide-convenience.scss'

type Props = {
  conveniences?: Array<any>
}

const convertConvenienceToComponent = (convenience: string) => {
  switch(convenience) {
    case "42880498-DFF5-4FB7-9267-39C51018B3EA":
      return  <div className="context">
        <TbAirConditioning size={40} />
      <span> Có điều hòa</span>
    </div>
    case "14AE3767-CA9F-4C73-A55E-5B02537C6002":
      return  <div className="context">
        <MdPets size={40} />
      <span> Mang thú cưng</span>
    </div>
    case "69C44411-8340-4D03-963E-BC6C59651D5B": 
      return  <div className="context">
        <BsCarFrontFill size={40} />
      <span> Chỗ đỗ ô tô</span>
    </div>
      case "14C2DB29-53FF-4B08-A2EE-1E51C352A35F": 
      return  <div className="context">
        <MdPayment size={40} />
      <span> Chấp nhận thanh toán thẻ</span>
    </div>
      case"ABB06119-0D7C-406C-AF35-87C83E61310B": 
      return  <div className="context">
       <GiCakeSlice size={40} />
      <span> Bánh ngọt</span>
    </div>
      case "ED67CE7D-A5FC-4EE2-A7AF-6465810CC89C": 
      return  <div className="context">
        <GiSoccerBall size={40} />
      <span> Chiếu bóng đá</span>
    </div>
      case "DE808EA0-E6AE-443D-9B33-2E4DC6FA0202": 
      return  <div className="context">
       <FaChild size={40} />
      <span> Sân chơi cho trẻ</span>
    </div>
      case "CDBCD51A-0C50-4EF0-A5FF-AB80FA5F04E5": 
      return  <div className="context">
       <GiGuitar size={40} /> 
      <span> Nhạc sống</span>
    </div>
      case "8D274479-2E71-4231-B648-D5D65A14171B": 
      return  <div className="context">
        <FaMotorcycle size={40} />
      <span>Trông xe máy</span>
    </div>
      case "768E9805-D103-4F20-92C0-2C4A1FF3C0B0": 
      return  <div className="context">
        <MdFastfood size={40} />
      <span> Mang đồ ăn ngoài</span>
    </div>
      case "1702C5E8-0437-4A93-B0BE-C4F594DBF265": 
      return <div className="context">
        <TiWeatherPartlySunny size={40} />
        <span> Ngoài trời</span>
      </div>
      case "B0BA038D-E016-43D3-ADF7-9DBF6ED5D76B": 
      return <div className="context">
        <FaWifi size={40}/> 
        <span> Có Wifi</span>
      </div>
  }
}

const sliceItemsConvenience = (conveniences: Array<any>)=> {
  return conveniences.map((convenience, index) => {
    return (
      <SwiperSlide key={index} >
          {
            convertConvenienceToComponent(convenience?.convenientID as string)
          }
      </SwiperSlide>
    )
  })
}

export default function SlideConvenience({conveniences}: Props) {
  
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
              sliceItemsConvenience(conveniences || [])
            }
        </Swiper>
    </div>
  )
}