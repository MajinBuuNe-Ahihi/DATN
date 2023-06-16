import React from 'react'
import * as ICON from './Icon'
import '@styles/navigation-mobile.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

export const NavigationMobile = (props: Props) => {
  const path = useRouter().pathname
  let activeStyle:React.CSSProperties = {
    borderTop: '1px solid #ee0033',
    color: '#ee0033'
  }
  let unActiveStyle:React.CSSProperties = {
    borderTop: 'none'
  }
  return (
    <div className='navigation-mobile'>
      <ul className='navigation-mobile__container'>
        <li className='navigation-mobile__element'>
          <Link href={'/'}
            style = {path == '/'?activeStyle : unActiveStyle}
          >
            <span>
              <ICON.ImHome size={25}/>
            </span>
            <span>
              trang chu
            </span>
          </Link>
        </li>
        <li className='navigation-mobile__element'>
          <Link href={'/explore'}
             style = {path == '/explore'?activeStyle : unActiveStyle}
          >
            <span>
              <ICON.AiTwotoneFire size={25}/>
            </span>
            <span>
              kham pha
            </span>
          </Link>
        </li>
        <li className='navigation-mobile__element'>
          <Link href={'/promo'}
             style = {path == '/promo'?activeStyle : unActiveStyle}>
            <span>
              <ICON.TbDiscount2 size={25}/>
            </span>
            <span>
              khuyen mai
            </span>
          </Link>
        </li>
        <li className='navigation-mobile__element'>
          <Link href={'/save'}
             style = {path == '/save'?activeStyle : unActiveStyle}>
            <span>
             <ICON.BsBookmarkStarFill size={25}/>
            </span>
            <span>
              da luU
            </span>
          </Link>
        </li>
        <li className='navigation-mobile__element'>
          <Link href={'/account'}
             style = {path == '/account'?activeStyle : unActiveStyle}>
            <span>
              <ICON.FaUser size={25}/>
            </span>
            <span>
              tai khoan
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}