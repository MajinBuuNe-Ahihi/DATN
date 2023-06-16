import React, { useState } from 'react'
import * as ICON from './Icon'
import { Button } from './Button'
import { Notification } from '../notification/Notification'
import { UserHeader } from '../userdropdown'
import HeaderEXPRO from '../expore-promo-header/HeaderEXPRO'
import { SearchComponent } from '../search'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { sidebar, searchmobile, popup } from '@reduxslice/trigger.overlay.slice'
import {login } from '@reduxslice/login.slice'
import logo from '@assets/logo.svg'
import bookmark from '@assets/bookmark2.svg'
import '@styles/header.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

export const Header = (props: Props) => {
  const router = useRouter()
  const url = router.pathname
  const [triggerOpenModal, setTriggerOpenModal] = useState<number>(useAppSelector((state)=> state.trigger.value)) // create a trigger check only a modal show when click dropdown
  const { logged } = useAppSelector((state) => state.loginmodal);
  const dispatch = useAppDispatch()
  const handleChangeKeyTrigger = (key: number) => {
    setTriggerOpenModal(key);
  }

  return (
    <>
    <div className='header'> 
      <div className= {'header__container'}>
        <div className={'header__container-left'}>
          <div className= {'header__logo'}>
          <Link href={'/'}>
          <img src={logo} alt='' className={'header__logo-image'} /> 
          </Link>
          </div>
        </div>
        <div className={'header__container-right'}>
          <div className='header__container-right-1'>
            {
              url !== '/' && <SearchComponent trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} type='header-search' placeholder='tim kiem quan cafe' currentPath={url} />  
            }
            <HeaderEXPRO trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} />  
          </div>
          <div className='header__container-right-2'>    
            <div className={'header__button-write-preview'}>
              <Link className= {'header__button-write-preview-container'} href={'/preview'}>
                <Button bg={1} type={1} padding={'10px 12px'}>
                  <>
                  <span> 
                  <ICON.BsPencilSquare size={25}/>
                  </span>
                  <span>
                    Viet review
                  </span>
                  </>
                </Button>
              </Link>
            </div>
            <div className={'header__login'}>
              {
                !logged ?
                  <div className={'header__login-button'}>
                      <Button type={1} bg={2} padding={'10px 12px'} onClick={() => { dispatch(popup()); dispatch(login()) }}>
                      <span>
                        Dang nhap
                      </span>
                  </Button>
                  </div>
                  :
                  <div className='header__feature-loggined'>
                      <div className='header__location-saved'>
                        <Link href={'/save'}>
                          <img src={bookmark} alt='book mark' className='header__location-saved-image' />
                        </Link>
                      </div>
                      <Notification trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                      <UserHeader trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                  </div>
              }
              </div>
            {
               url == '/' ? 
              <div className='header__near-place'>
                <Link href={'/near-you'}>
                  <span>
                    <ICON.HiLocationMarker size={25}/>
                  </span>
                </Link>
              </div>:
              <div className='header__search-button' onClick={() => dispatch(searchmobile())}>
                <span>
                  <ICON.BiSearch size={25}/>
                </span>
              </div>
            }
            <div className='header__more-feature' onClick={()=>dispatch(sidebar())}>
                <span>
                  <ICON.HiViewGrid size={25}/>
                </span>
            </div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}