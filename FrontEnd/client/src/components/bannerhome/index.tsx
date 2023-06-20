import React, { useRef } from 'react'
import Video from '../common/Video'
import BannerDesktop from './BannerDesktop'
import '../../styles/home-banner.scss'
import { useCheckpoint } from '../../hooks'
import BannerMobile from './BannerMobile'

type Props = {}

export default function BannerHome({ }: Props) {
  const { deviceCurrent } = useCheckpoint('');
  return (
    <>
    {
      deviceCurrent == 'mobile'?<BannerMobile/>:<BannerDesktop/>
    }
    </>
  )
}