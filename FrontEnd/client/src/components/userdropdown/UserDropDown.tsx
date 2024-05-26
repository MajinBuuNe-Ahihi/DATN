import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ICON from '../common';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../sliceredux/login.slice';

import '../../styles/userdropdown.scss'
import user from '../../assets/unnamed.jpg'
import level from '../../assets/level.png'

type Props = {
  user: any;
}

export function UserDropDown({ user}: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let directUser = () => navigate('/profile')

  return (
    <div className='header-user-drop-down'>
      <div className='header-user-drop-down__top'>
        <div className='header-user-drop-down-top-profile' onClick={()=>directUser()}>
          <img src={user} alt='HoangVanManh' className='header-user-drop-down-top-profile__avatar' />
          <div className='header-user-drop-down-top-profile__info'>
            <span>{user.userName}</span>
            <img src={level} alt='#' />
          </div>
        </div>
      </div>
      <ul className='header-user-drop-down__list'>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' to='/'>
            <span><ICON.FaUserEdit size={25}/></span>
            <span>Chỉnh sửa hồ sơ</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' to='/'>
            <span><ICON.FaCoins size={25}/></span>
            <span>Điểm thưởng</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' to='/'>
            <span><ICON.HiOutlineMail size={25}/></span>
            <span>Liên hệ - Góp ý</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' to='/' onClick={()=>{dispatch(logout()); localStorage.removeItem("user")}}>
            <span><ICON.BiPowerOff size={25}/></span>
            <span>Đăng xuất</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}