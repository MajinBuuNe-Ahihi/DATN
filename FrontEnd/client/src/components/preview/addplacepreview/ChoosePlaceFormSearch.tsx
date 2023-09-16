import React,{useRef,useEffect} from 'react'
import {FaTimes,AiOutlineLoading3Quarters} from '../../common/Icon'
import useOutsideClick from '../../../hooks/outsideclick.hooks'
import { useAppDispatch } from '../../../hooks'
import { Overlay,SearchHomeDesktop } from '../../../sliceredux/trigger.overlay.slice';
import { Button } from '../../common/Button'
import './choose-place-form-search.scss'
type Props = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>,
  isOpen: boolean,
}
type PropsResult = {}

const ResultItem = ({}:PropsResult)=> {
  return (
    <div className="form-search-review__result-item">
    <div className="form-search-review__result-item-container">
      <div className="form-search-review__result-item-image">
        <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg?w=50&h=50" alt="" />
      </div>
      <div className="form-search-review__result-item-content">
        <div className="form-search-review__result-item-name">
          Manh coffee
        </div>
        <div className="form-search-review__result-item-address">
          thôn 8 xã sông khoai
        </div>
      </div>
    </div>
  </div>
  )
}

export default function ChoosePlaceFormSearch({setClose,isOpen}: Props) {
  const thisRef = useRef<HTMLDivElement>(null);
  const {outClick} = useOutsideClick(thisRef);
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(SearchHomeDesktop())
    if(outClick) {
      setClose(!outClick)
    }
  },[outClick])
  
  useEffect(() =>{return () =>  {dispatch(Overlay())}},[])


  return (
    <div className="form-search-review" ref={thisRef}>
      <div className="form-search-review__header">
        <div className="form-search-review__title">
          Chọn địa điểm đánh giá
        </div>
        <div className="form-search-review__close" onClick={()=>setClose(false)}>
          <FaTimes size={20}> </FaTimes>
        </div>
      </div>
      <div className="form-search-review__contain">
        <div className="form-search-review__area-search">
          <div className="form-search-review__area-search-input">
            <input type="text" />
            <div className="search-loading">
              <AiOutlineLoading3Quarters size={20}></AiOutlineLoading3Quarters>
            </div>
          </div>
          <Button className='form-search-review__add-new-place'>
            <div>
              Thêm địa điểm
            </div>
          </Button>
        </div>
        <div className="form-search-review__result">
          <div className="form-search-review__result-title">
            Đã xem gần đây
          </div>
          <div className="form-search-review__list-result">
            <ResultItem></ResultItem>
          </div>
        </div>
      </div>
    </div>
  )
}