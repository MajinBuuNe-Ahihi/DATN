import React, { useState ,useEffect} from 'react'
import { CSSTransition } from 'react-transition-group';
import { Input, BiSearch, AiOutlineLoading3Quarters, FaTimes } from '../common'
import { useAppDispatch, useAppSelector, useCheckpoint } from '../../hooks'
import SearchResult from './SearchResult';
import {Overlay, SearchHomeDesktop,MobileSearch} from '../../sliceredux';
import '../../styles/search.scss'
import { useQuery,gql } from '@apollo/client'

const SEARCH = gql `
query SearchStore($search: String) {
  searchStore(search: $search) {
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
}
`


type Props = {
  type: string, //type class search
  placeholder: string,
  currentPath?: string,
  trigger?: number,
  setTrigger?: (key:number)=>void
}

export function SearchComponent(props: Props) {
  const { loading, error, data ,refetch } = useQuery(SEARCH);
  const [value, setValue] = useState<string>('');
  const { deviceCurrent } = useCheckpoint('');
  const [open, setOpen] = useState<boolean>(false);
  const triggerSidebar = useAppSelector((state) => state.trigger.value);
  const dispatch = useAppDispatch()

  let onFocusOpenModal = () => {
    setOpen(true);
    if (props.setTrigger != undefined) {
      props.setTrigger(4);
    }

    if (props.currentPath === '/')
    { 
      if (props.type != 'home-search') {
        dispatch(MobileSearch())
      } else {
        dispatch( SearchHomeDesktop())
      }
    }
  }


  let outFocusOpenModal = () => {
    setOpen(false);
    if (props.currentPath === '/' && props.type == 'home-search' )
    { 
      dispatch(Overlay())
    }
  }

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
    <>
    { (deviceCurrent != 'mobile' ||  props.type != 'header-search') && // check mobile not show and it must have type search header
      <div className={`${props.type}-wrapper`}>
        <Input type='text' name='search' value={value} onFocus={onFocusOpenModal} onBlur={outFocusOpenModal} className={props.type + '-input'}
            placeholder={props.placeholder} onChange={(e: Event) => { const result = (e.target as HTMLInputElement) ; setValue(result.value || '') }} />
      {/* {
        props?.currentPath === '/' && props.type == 'home-search' ?
        <div className='search-button-home' onClick={()=>{
          if(value.length > 0 ) {
            refetch({
              search: value
            })
          }
        }}>
          <span className='search-button-home__icon'>
            <BiSearch size={25} />
          </span>
          <span className='search-button-home__text'>
            Search
          </span>
        </div> :
          <span className={`${props.type}-icon`}>
          <BiSearch size={20}/>
        </span>
      } */}
      {  // check value and loading, click time refresh input search
      loading &&
      <span className='search-loading' > 
        <AiOutlineLoading3Quarters size={25} />
      </span>
      }
      {
        !loading && value && (   <span className='search-close' onMouseEnter= {() => {
          setValue('')
        }}>
        <FaTimes size={25}/>
        </span>)
      }
      <CSSTransition
        in={open && (props?.trigger == 4 || triggerSidebar == 7) && props.type != 'home-search-mobile'}
        timeout={500}
        unmountOnExit
        classNames='modal-dropdown'
      >
        <SearchResult keySearch={value} value={data?.searchStore} />
      </CSSTransition>
      {
        triggerSidebar == 6 && props.type != 'home-search-mobile' &&<>
          <div className='search-cancel-button-sidebar' onClick={()=> dispatch(Overlay())}>
          Hủy
          </div>
          <SearchResult keySearch={value} value ={data?.searchStore} />    
        </>
      }
      </div>
      }
    </>
  )
}