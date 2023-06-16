import React from 'react'
import * as ICON from '@components/common'
import image from '@assets/element-search.webp'
import SearchHistory from './SearchHistory'
import { SearchResultElement } from './SearchResultElement'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  value:any
}

export default function({value}: Props) {
  return (
    <div className='search-result-wrapper'>
      <div className='search-result-container'>
        {
          // check if no value in input
        !value ? <> 
        <div className='search-result-near-you'>
          <Link href={'/'} className='search-result-near-you__link'>
            <span><ICON.TiLocationArrowOutline size={25} /></span>
            <span>Tim dia diem quanh ban</span>
          </Link>
        </div>
        <div className='search-result-title'>
          De xuat
        </div>
        <div className='search-result-element'>
          <Link href={'/'} className='search-result-element-link'>
          <Image src={image} alt='shopname' className='search-result-element__image' />
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
        </div>
        <div className='search-result-title'>
          Da xem gan day
        </div>
        <SearchHistory />
        </>
        :
        <>
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <div className='more-search-result'>
          <Link href={'/'}  className='more-search-result-link'>
            <span className='more-search-result-icon'>
              <ICON.GrSearchAdvanced size={25} />
            </span>
            <span className='more-search-result-text'>
            xem tat ca ket qua cho:
            <span className='more-search-result-text__value'>{value.toString()}</span>
            </span>
          </Link>
        </div>
        </>
        }
      </div>
    </div>
  )
}