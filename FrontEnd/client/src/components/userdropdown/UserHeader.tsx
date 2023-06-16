import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import user from '@assets/unnamed.jpg'
import { UserDropDown } from './UserDropDown'
import '@styles/userdropdown.scss'
import { useCheckpoint } from '@hooks/index';
import Image from 'next/image';

type Props = {
  trigger: number,
  setTrigger: (key:number)=>void
}

export function UserHeader({trigger,setTrigger }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const { deviceCurrent } = useCheckpoint('')

  let openDropDown = () => {
    setOpen(pre => !pre);
    setTrigger(3)
  };
  
  useEffect(() => {
    setOpen(false)
  }, [deviceCurrent])

  return (
    <div className='user-header'>
      <div className='user-header-button' onClick={() => openDropDown()}>
        <Image src={user} alt='Hoang van manhh' className='user-header-button' />
      </div>
      <CSSTransition
        in={open && trigger == 3}
        timeout={500}
        unmountOnExit
        classNames='modal-dropdown'
      >
        <UserDropDown/>
      </CSSTransition>
    </div>
  )
}