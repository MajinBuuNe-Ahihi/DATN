import React,{useEffect, useState} from 'react'
import {  Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  useCheckpoint } from '../../hooks'
import { FaTimes,AiOutlineMinus,AiOutlinePlus } from '../common/Icon';
import { Enumrable } from '../../constants';
import '../../styles/previewmultipleimage.scss'

type Props = {
    currentImage: string,
    listImage: Array<string>
}
const {Mobile} = Enumrable.Screen;

const PreviewMultipleImages = (props: Props) => {
    const [currentImageIndex,setCurrentImageIndex] = useState<number>(props.listImage.findIndex((item)=>item == props.currentImage)+1);
    const [zoom,setZoom] = useState<number>(1);
    const { deviceCurrent } = useCheckpoint('');
    const currentSizeIcon = deviceCurrent === Mobile.Name? 15 : 25
    useEffect(()=>{
        setZoom(1);
    },[currentImageIndex])
  return (
    <>
        {
        (props.listImage?.length > 0 && props.currentImage) &&
        <div className="preview-multiple-images">
            <div className="preview-multiple-images__header">
                <div className="preview-multiple-images__header--left">
                    <div className="preview-multiple-images__number">
                        <span>
                            {currentImageIndex}
                        </span>
                        <span>
                        /
                        </span>
                        <span>
                            {props.listImage?.length}
                        </span>
                    </div>
                </div>
                <div className="preview-multiple-images__header--right">
                <div style={{opacity: zoom == 2?0.5:1}} title='phóng to' className="preview-multiple-images__button preview-multiple-images__button--plus" 
                onClick={()=>zoom<2?setZoom((z)=>z+0.25):zoom}>
                <AiOutlinePlus size={currentSizeIcon} className="preview-multiple-images__icon" />
                </div>
                <div style={{opacity: zoom == 0?0.5:1}} title='thu nhỏ' className="preview-multiple-images__button preview-multiple-images__button--minus" 
                onClick={()=>zoom>1?setZoom((z)=>z-0.25):zoom}>
                <AiOutlineMinus size={currentSizeIcon} className="preview-multiple-images__icon" />
                </div>
                <div title='Đóng' className="preview-multiple-images__button preview-multiple-images__button--close">
                    <FaTimes size={currentSizeIcon} className="preview-multiple-images__icon" />
                </div>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                navigation={true}
                onSnapIndexChange={(e)=>setCurrentImageIndex(e.activeIndex + 1)}
                modules={[Navigation]}
                className={`preview-multiple-images__slide`}
                >
                {
                props.listImage.map((item,index) =>
                <SwiperSlide key={index}>
                    <div className="preview-multiple-images__image" style={{background: `url(${item})`,transform:`scale(${zoom})`}}></div>
                </SwiperSlide>
                )
                }
            </Swiper>
        </div>
        }
    </>

  )
}

export default PreviewMultipleImages;