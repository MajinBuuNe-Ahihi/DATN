import React,{useRef,useEffect,useState} from 'react'
import {FaTimes,AiOutlineLoading3Quarters} from '../../common/Icon'
import useOutsideClick from '../../../hooks/outsideclick.hooks'
import { useAppDispatch } from '../../../hooks'
import { Overlay,SearchHomeDesktop } from '../../../sliceredux/trigger.overlay.slice';
import { Button } from '../../common/Button'
import './choose-place-form-search.scss'
import { useQuery,gql } from '@apollo/client'

const SEARCH = gql `
query Query($search: String) {
    searchStore(search: $search) {
      store {
        storeID
        storeName
        areaID
        storeAddress
        longtitude
        latitude
        directInfo
        openTime
        closeTime
        toPrice
        fromPrice
        wifiName
        wifiPassword
        types
        convenients
        phoneNumber
        email
        facebookLink
        instagramLink
        website
        createBy
        createDate
        modifiedBy
        modifiedDate
      }
      reviews {
        reviewID
        userID
        storeID
        title
        description
        locationRate
        placeRate
        serviceRate
        foodRate
        priceRate
        like
        view
        createBy
        createDate
        modifiedBy
        modifiedDate
      }
    }
  }
  
`

type Props = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>,
  isOpen: boolean,
  openCard: React.Dispatch<React.SetStateAction<any>>
}
type PropsResult = {
  place: any,
  setCard: React.Dispatch<React.SetStateAction<any>>
}

const ResultItem = ({place,setCard}:PropsResult)=> {
  const addHistory = () => {
    let searchHistory = JSON.parse((localStorage.getItem('history') || "[]"))

      let index = searchHistory.findIndex((item:any) => item.storeID == place.storeID)
      if(index !== -1) {
        searchHistory.splice(index, 1)
      }else {
        if(searchHistory.length > 5) {
          searchHistory.splice(0,1)
        }
      }
      searchHistory.push(place)
      localStorage.setItem('history', JSON.stringify(searchHistory))
    
  }

  return (
    <div className="form-search-review__result-item" onClick={()=>{addHistory();setCard(place)}}>
    <div className="form-search-review__result-item-container">
      <div className="form-search-review__result-item-image">
        <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg?w=50&h=50" alt="" />
      </div>
      <div className="form-search-review__result-item-content">
        <div className="form-search-review__result-item-name">
          {place.storeName}
        </div>
        <div className="form-search-review__result-item-address">
           {place.directInfo + " " + place.storeAddress}
        </div>
      </div>
    </div>
  </div>
  )
}

export default function ChoosePlaceFormSearch({setClose,isOpen,openCard}: Props) {
  const { loading, error, data ,refetch } = useQuery(SEARCH);
  const thisRef = useRef<HTMLDivElement>(null);
  const {outClick} = useOutsideClick(thisRef);
  const [value,setValue] = useState<string>("")
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(SearchHomeDesktop())
    if(outClick) {
      setClose(!outClick)
    }
  },[outClick])
  
  useEffect(() =>{return () =>  {dispatch(Overlay())}},[])
  useEffect(() => {
    const getData = setTimeout(() => {
      if(value.length > 0 ) {
        refetch({
          search: value
        })
      }else {
        refetch({search: "sdihqwie2839213293012381237dabdada"})
      }
    }, 100)

    return () => clearTimeout(getData)
  },[value])
  


  return (
    <div className="form-search-review" ref={thisRef}>
      <div className="form-search-review__header">
        <div className="form-search-review__title">
          Chọn địa điểm đánh giá
        </div>
        <div className="form-search-review__close" onClick={()=>{setClose(false); openCard({})}}>
          <FaTimes size={20}> </FaTimes>
        </div>
      </div>
      <div className="form-search-review__contain">
        <div className="form-search-review__area-search">
          <div className="form-search-review__area-search-input">
            <input type="text" onChange={(e)=>{setValue(e.target.value)}}/>
            {
              loading && <div className="search-loading">
                <AiOutlineLoading3Quarters size={20}></AiOutlineLoading3Quarters>
              </div>
            }
          </div>
          <Button className='form-search-review__add-new-place'>
            <div>
              Thêm địa điểm
            </div>
          </Button>
        </div>
        <div className="form-search-review__result">
          <div className="form-search-review__list-result">
          {
            data?.searchStore && Array.from(data?.searchStore).map((item) => (
              <ResultItem setCard ={openCard} place={item}></ResultItem>
            ))   
          }
          </div>
          <div className="form-search-review__result-title">
            Đã xem gần đây
          </div>
          <div className="form-search-review__list-result">
          {
            Array.from(JSON.parse(localStorage.getItem('history') ?localStorage.getItem('history') as string:"[]")).map((item) => (
              <ResultItem setCard ={openCard}  place={item}></ResultItem>
            ))   
          }
          </div>
        </div>
      </div>
    </div>
  )
}