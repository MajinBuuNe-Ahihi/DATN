import React, { ElementRef, useEffect, useRef, useState } from 'react'
import {BsPlayFill, BsFillPauseFill} from '../common'
import Video from '@components/common/Video'
import '@styles/home-banner.scss'
import TitleAndSearch from './TitleAndSearch'

type Props = {}

export default function BannerDesktop({ }: Props) {
  type typeRef = ElementRef<typeof Video>
  const [trigger, setTrigger] = useState<boolean>(true);
  const ref = useRef<typeRef>(null)
  useEffect(() => {
    ref.current?.play();
    setTrigger(false);
  }, [])

  return (
    <div className='banner-desktop'>
      <TitleAndSearch />
      <Video ref={ref} />
      {
        ref.current?.status()?
          <span className='button-controls-video' onClick={() => { ref.current?.pause(); setTrigger(pre => !pre) }}>
            <BsFillPauseFill size={25} />
          </span> :
          <span  className='button-controls-video' onClick={() => { ref.current?.play(); setTrigger(pre => !pre) }}>
            <BsPlayFill size={25} />
          </span>
      }
    </div>
  )
}