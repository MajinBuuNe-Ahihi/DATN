import React from 'react'
import * as ICON from '../common'
import image from '../../assets/element-search.webp'
import { Link } from 'react-router-dom'
import SearchHistory from './SearchHistory'
import { SearchResultElement } from './SearchResultElement'


type Props = {
  value:any,
  keySearch :string
}



export default function({value,keySearch}: Props) {
  return (
    <div className='search-result-wrapper'>
      <div className='search-result-container'>
        {
          // check if no value in input
        !value ? <> 
        <div className='search-result-near-you'>
          <Link to={'/near-you'} className='search-result-near-you__link'>
            <span><ICON.TiLocationArrowOutline size={25} /></span>
            <span>Tìm địa điểm quanh bạn</span>
          </Link>
        </div>
        {/* <div className='search-result-title'>
          Đề xuất
        </div>
        <div className='search-result-element'>
          <Link to={'/'} className='search-result-element-link'>
          <img src={image} alt='shopname' className='search-result-element__image' />
          <div className='search-result-element-info'>
            <span className='search-result-element-info__name'>
              Manh CoffeeShop
            </span>
            <span className='search-result-element-info__address'>
              so nha 10, ngach 134 ngo 48, minh khai, bac tu liem, ha noi
            </span>
          </div>
          <span className='search-result-element-icon'>
            <ICON.AiTwotoneFire size={25} />
          </span>
          </Link>
        </div> */}
        <div className='search-result-title'>
          Đã xem gần đây
        </div>
          {
            Array.from(JSON.parse(localStorage.getItem('history') ?localStorage.getItem('history') as string:"[]")).map((item) => (
              <SearchResultElement data={item} />
            ))   
          }
        </>
        :
        <>
        {
          Array.from(value).map((item:any) =>
            <>
             <SearchResultElement data={item?.store} />
            </>)
        }
        <div className='more-search-result'>
          <Link to={'/'}  className='more-search-result-link'>
            <span className='more-search-result-icon'>
              <ICON.GrSearchAdvanced size={25} />
            </span>
            <span className='more-search-result-text'>
            Xem tất cả kết quả cho: <b>{keySearch}</b>
          </span>
          </Link>
        </div>
        </>
        }
      </div>
    </div>
  )
}