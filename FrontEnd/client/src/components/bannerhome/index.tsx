import React, { useRef } from 'react'
import BannerDesktop from './BannerDesktop'
import '@styles/home-banner.scss'
import { useCheckpoint } from '@hooks/checkponit.hooks'
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