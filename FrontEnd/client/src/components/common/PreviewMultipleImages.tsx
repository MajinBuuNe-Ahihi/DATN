import React,{useEffect, useState,useRef} from 'react'
import {  Navigation} from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { FaTimes,AiOutlineMinus,AiOutlinePlus } from '../common/Icon';
import { Enumrable } from '../../constants';
import '../../styles/previewmultipleimage.scss'
import { useAppDispatch, useAppSelector, useCheckpoint } from '../../hooks'
import { ClosePreview } from '../../sliceredux/preview-multiple-image.slice';

type Props = {
}
const {Mobile} = Enumrable.Screen;

const PreviewMultipleImages = (props: Props) => {
    
    const { open: openPreview, currentImage,listImage} = useAppSelector(state => state.previewmultipleimagemodal)
    const dispatch = useAppDispatch();
    const closePreview = () => {
      dispatch(ClosePreview());
    }
    
    

    const [currentImageIndex,setCurrentImageIndex] = useState<number>(1);
    const [zoom,setZoom] = useState<number>(1);
    const { deviceCurrent } = useCheckpoint('');
    const currentSizeIcon = deviceCurrent === Mobile.Name? 15 : 25
    useEffect(()=>{
        setZoom(1);
    },[currentImageIndex])
    useEffect(()=> {
        let index = listImage.findIndex((item)=>item == currentImage)+1
        setCurrentImageIndex(index);
    },[currentImage])
  return (
    <>
        {
        (openPreview && listImage?.length > 0 && currentImage) &&
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
                            {listImage?.length}
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
                <div title='Đóng' onClick={()=>closePreview()} className="preview-multiple-images__button preview-multiple-images__button--close">
                    <FaTimes size={currentSizeIcon} className="preview-multiple-images__icon" />
                </div>
                </div>
            </div>
            {
                currentImageIndex && 
                <Swiper
                    initialSlide={currentImageIndex - 1}
                    slidesPerView={1}
                    navigation={true}
                    onSnapIndexChange={(e)=>setCurrentImageIndex(e.activeIndex + 1)}
                    modules={[Navigation]}
                    className={`preview-multiple-images__slide`}
                    >
                    {
                    listImage.map((item,index) =>
                    <SwiperSlide key={index}>
                        <div className="preview-multiple-images__image" style={{background: `url(${item})`,transform:`scale(${zoom})`}}></div>
                    </SwiperSlide>
                    )
                    }
                </Swiper>
            }
        </div>
        }
    </>

  )
}

export default PreviewMultipleImages;