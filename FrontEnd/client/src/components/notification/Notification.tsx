import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCheckpoint } from '@hooks/index'
import bell from '@assets/bell2.svg'
import '@styles/notification.scss'
import { NotificationDropDown } from './NotificationDropDown'
type Props = {
  trigger: number,
  setTrigger: (key:number)=>void
}

export const Notification = (props: Props) => {
  const {deviceCurrent} = useCheckpoint('')
  const [open, setOpen] = useState<boolean>(false)
  const openDropDown = () => {
    setOpen(pre => !pre)
    props.setTrigger(2)
  }

  useEffect(() => {
    setOpen(false)
  }, [deviceCurrent])
  
  return (
    <div className='header__noti'>
      <div className='header__noti-button' onClick={()=>openDropDown()}>
        <img className='header__noti-button-icon' src={bell} />
      </div>
      <CSSTransition
        in={open && props.trigger == 2}
        timeout={500}
        unmountOnExit
        classNames='modal-dropdown'
      >
        <NotificationDropDown />
      </CSSTransition>
    </div>
  )
}