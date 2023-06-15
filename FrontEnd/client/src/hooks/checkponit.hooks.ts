import { Enums } from '@/constants'
import React, { useEffect, useState } from 'react'
type Props = {}
const EnumsScreen =  Enums.EnumsScreen

export function useCheckpoint({ }: Props) {
  const [deviceCurrent,setDeviceCurrent] = useState(window.innerWidth <=  EnumsScreen.Mobile.Size?
    EnumsScreen.Mobile.Name:window.innerWidth >=  EnumsScreen.PC.Size? EnumsScreen.PC.Name: EnumsScreen.Tablet.Name)
  useEffect(() => {
    let checkpoint = () => {
      setDeviceCurrent((window.innerWidth <=  EnumsScreen.Mobile.Size?
        EnumsScreen.Mobile.Name:window.innerWidth >=  EnumsScreen.PC.Size? EnumsScreen.PC.Name: EnumsScreen.Tablet.Name))
    }
    window.addEventListener('resize', checkpoint)
    return ()=> window.removeEventListener('resize',checkpoint)
  })
  return { deviceCurrent }
}