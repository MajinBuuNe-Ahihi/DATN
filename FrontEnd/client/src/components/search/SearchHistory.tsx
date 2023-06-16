import React from 'react'
import * as ICON from '@components/common'
import '@styles/search.scss'
import image from '@assets/element-search.webp'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function SearchHistory({}: Props) {
  return (
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
          <ICON.FaTimes size={25} />
        </span>
        </Link>
      </div>
  )
}