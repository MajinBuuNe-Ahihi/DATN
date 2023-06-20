import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header,NavigationMobile  } from '../common'
import { useAppSelector, useCheckpoint } from '../../hooks'
import { CSSTransition } from 'react-transition-group'
import SideBar from '../common/SideBar'
import { SearchComponent } from '../search'

type Props = {}

export function MainLayout({ }: Props) {
  const trigger = useAppSelector((state) => state.trigger.value)
  const { deviceCurrent } = useCheckpoint('');
  return (
    <div className='MainLayout'>
      <Header></Header>
      <Outlet></Outlet>
      {
        deviceCurrent == 'mobile' && <CSSTransition
        in={trigger == 5}
        timeout={500}
        unmountOnExit
        classNames='sidebar'>
        <SideBar /> 
        </CSSTransition>
      }
      {
        deviceCurrent == 'mobile' && <CSSTransition
        in={trigger == 6}
        timeout={500}
        unmountOnExit
        classNames='sidebar'>
          <SearchComponent type='sidebar-search' placeholder='Nhap ten quan, khu vuc, kieu quan' /> 
        </CSSTransition>
      }
      {
        deviceCurrent == 'mobile'?<NavigationMobile/> :<Footer/>
      }
    </div>
  )
}