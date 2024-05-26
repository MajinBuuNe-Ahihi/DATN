import React from 'react'
import { Link } from 'react-router-dom'
import * as ICON from '../common'
import '../../styles/search.scss'
import image from '../../assets/element-search.webp'
type Props = {
  data: any,
}

export  function SearchResultElement({data}: Props) {
  const addHistory = () => {
    let searchHistory = JSON.parse((localStorage.getItem('history') || "[]"))

      let index = searchHistory.findIndex((item:any) => item.storeID == data.storeID)
      if(index !== -1) {
        searchHistory.splice(index, 1)
      }else {
        if(searchHistory.length > 5) {
          searchHistory.splice(0,1)
        }
      }
      searchHistory.push(data)
      localStorage.setItem('history', JSON.stringify(searchHistory))
    
  }
  return (
      <div className='search-result-element' onClick={()=> addHistory()}>
        <Link to={`/place/${data.storeID}`} className='search-result-element-link'>
        <img src={image} alt='shopname' className='search-result-element__image' />
        <div className='search-result-element-info'>
          <span className='search-result-element-info__name'>
            {data.storeName}
          </span>
          <span className='search-result-element-info__address'>
            {data.directInfo + " " + data.storeAddress}
          </span>
        </div>
        <span className='search-result-element-icon'>
          <ICON.BiSearch size={25} />
        </span>
        </Link>
      </div>
  )
}