import React from 'react'
import * as ICON from '../common';
import { useAppDispatch } from '@hooks/index';
import { logout } from '@reduxslice/login.slice';

import '@styles/userdropdown.scss'
import user from '@assets/unnamed.jpg'
import level from '@assets/level.png'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export function UserDropDown({ }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className='header-user-drop-down'>
      <div className='header-user-drop-down__top'>
        <Link className='header-user-drop-down-top-profile' href={'/profile'}>
          <Image src={user} alt='HoangVanManh' className='header-user-drop-down-top-profile__avatar' />
          <div className='header-user-drop-down-top-profile__info'>
            <span>Hoang Van Manh</span>
            <Image src={level} alt='#' />
          </div>
        </Link>
      </div>
      <ul className='header-user-drop-down__list'>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' href='/'>
            <span><ICON.FaUserEdit size={25}/></span>
            <span>Chinh sua ho so</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' href='/'>
            <span><ICON.FaCoins size={25}/></span>
            <span>Diem thuong</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' href='/'>
            <span><ICON.HiOutlineMail size={25}/></span>
            <span>Lien he-Gop y</span>
          </Link>
        </li>
        <li className='header-user-drop-down-list-element'>
          <Link className='header-user-drop-down-list-element__link' href='/' onClick={()=>dispatch(logout())}>
            <span><ICON.BiPowerOff size={25}/></span>
            <span>Dang xuat</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}