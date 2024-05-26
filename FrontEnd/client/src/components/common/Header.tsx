import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import * as ICON from './Icon'
import { Button } from './Button'
import { Notification } from '../'
import { UserHeader } from '../userdropdown'
import HeaderEXPRO from '../expore-promo-header/HeaderEXPRO'
import { SearchComponent } from '../search'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { SideBar,MobileSearch, Popup } from '../../sliceredux'
import { login } from '../../sliceredux/login.slice'
import logo from '../../assets/logo.svg'
import bookmark from '../../assets/bookmark2.svg'
import '../../styles/header.scss'

type Props = {}

export const Header = (props: Props) => {
  const url = useLocation()
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
          <div className= {'header__logo'} style={{fontFamily:"monospace", fontSize:"30",fontWeight: "bold",color: "#ee0033"}}>
          <Link to={'/'} style={{color: "#ee0033", fontSize:"45px",fontFamily:"Brush Script MT"}}>
           Cafe Chill
          </Link>
          </div>
        </div>
        <div className={'header__container-right'}>
          <div className='header__container-right-1'>
            {
              url.pathname !== '/' && <SearchComponent trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} type='header-search' placeholder='tìm kiếm quán cafe' currentPath={url.pathname} />  
            }
            <HeaderEXPRO trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} />  
          </div>
          <div className='header__container-right-2'>    
            <div className={'header__button-write-preview'}>
              <Link className= {'header__button-write-preview-container'} to={'/preview'}>
                <Button bg={1} type={1} padding={'10px 12px'}>
                  <>
                  <span> 
                  <ICON.BsPencilSquare size={25}/>
                  </span>
                  <span>
                   Viết review
                  </span>
                  </>
                </Button>
              </Link>
            </div>
            <div className={'header__login'}>
              {
                !logged ?
                  <div className={'header__login-button'}>
                      <Button type={1} bg={2} padding={'10px 12px'} onClick={() => { dispatch(Popup()); dispatch(login()) }}>
                      <span>
                        Đăng nhập
                      </span>
                  </Button>
                  </div>
                  :
                  <div className='header__feature-loggined'>
                      <div className='header__location-saved'>
                        <Link to={'/save'}>
                          <img src={bookmark} alt='book mark' className='header__location-saved-image' />
                        </Link>
                      </div>
                      <Notification trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                      {
                        localStorage.getItem("user") &&   <UserHeader trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                      }
                  </div>
              }
              </div>
            {
               url.pathname == '/' ? 
              <div className='header__near-place'>
                <Link to={'/near-you'}>
                  <span>
                    <ICON.HiLocationMarker size={25}/>
                  </span>
                </Link>
              </div>:
              <div className='header__search-button' onClick={() => dispatch(MobileSearch())}>
                <span>
                  <ICON.BiSearch size={25}/>
                </span>
              </div>
            }
            <div className='header__more-feature' onClick={()=>dispatch(SideBar())}>
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