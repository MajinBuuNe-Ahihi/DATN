import React from 'react'
import { Link } from 'react-router-dom'
import * as ICON from '../common'
import '../../styles/search.scss'
import image from '../../assets/element-search.webp'

type Props = {}

export default function SearchHistory({}: Props) {
  return (
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
          <ICON.FaTimes size={25} />
        </span>
        </Link>
      </div>
  )
}