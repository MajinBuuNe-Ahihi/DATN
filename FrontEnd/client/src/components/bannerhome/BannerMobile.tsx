import React from 'react'
import TitleAndSearch from './TitleAndSearch'
import '../../styles/home-banner.scss';

type Props = {}

export default function BannerMobile({}: Props) {
  return (
    <div className='banner-mobile'>
      <TitleAndSearch />
    </div>
  )
}