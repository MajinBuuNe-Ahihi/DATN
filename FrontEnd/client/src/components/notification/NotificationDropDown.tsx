import React from 'react'
import { NotificationDropDownElement } from './NotificationDropDownElement'
import * as ICON from '../common'
import '@styles/notification.scss'

type Props = {}

export  function NotificationDropDown({}: Props) {
  return (
    <div className='header__noti-drop-down'>
      <div className='header__noti-drop-down-header'>
        <span className='header__noti-drop-down-header-title' >Thong bao</span>
        <span className='header__noti-drop-down-header-check'>
          <ICON.BsCheckAll size={25}/>
          <span>
            Danh giau da xem
          </span>
        </span>
      </div>
      <div className='header__noti-drop-down-list'>
        <NotificationDropDownElement id='12' status={false} time={new Date('2/12/2021')} content='hello' />
      </div>
    </div>
  )
}