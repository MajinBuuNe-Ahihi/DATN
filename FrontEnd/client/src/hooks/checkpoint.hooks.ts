import React, { useEffect, useState } from 'react'
import { Enumrable } from '../constants'
type Props = {}

export function useCheckpoint({ }: Props) {
  const {Mobile,Tablet,PC} = Enumrable.Screen;
  const [deviceCurrent,setDeviceCurrent] = useState(window.innerWidth <= Mobile.Size?Mobile.Name:window.innerWidth >= PC.Size?PC.Name:Tablet.Name)
  useEffect(() => {
    let checkpoint = () => {
      setDeviceCurrent((window.innerWidth <= Mobile.Size?Mobile.Name:window.innerWidth >= PC.Size?PC.Name:Tablet.Name))
    }
    window.addEventListener('resize', checkpoint)
    return ()=> window.removeEventListener('resize',checkpoint)
  })
  return { deviceCurrent }
}