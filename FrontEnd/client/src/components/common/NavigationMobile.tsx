import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ICON from './Icon'
import '../../styles/navigation-mobile.scss'

type Props = {}

export const NavigationMobile = (props: Props) => {
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
          <NavLink to={'/'}
            style = {({isActive}) => isActive?activeStyle : unActiveStyle}
          >
            <span>
              <ICON.ImHome size={25}/>
            </span>
            <span>
              trang chu
            </span>
          </NavLink>
        </li>
        <li className='navigation-mobile__element'>
          <NavLink to={'/explore'}
            style={({ isActive }) => isActive ? activeStyle : unActiveStyle}
          >
            <span>
              <ICON.AiTwotoneFire size={25}/>
            </span>
            <span>
              kham pha
            </span>
          </NavLink>
        </li>
        <li className='navigation-mobile__element'>
          <NavLink to={'/promo'}
           style = {({isActive}) => isActive?activeStyle : unActiveStyle}>
            <span>
              <ICON.TbDiscount2 size={25}/>
            </span>
            <span>
              khuyen mai
            </span>
          </NavLink>
        </li>
        <li className='navigation-mobile__element'>
          <NavLink to={'/save'}
            style={({ isActive }) => isActive ? activeStyle : unActiveStyle}>
            <span>
             <ICON.BsBookmarkStarFill size={25}/>
            </span>
            <span>
              da luU
            </span>
          </NavLink>
        </li>
        <li className='navigation-mobile__element'>
          <NavLink to={'/account'}
            style={({ isActive }) => isActive ? activeStyle : unActiveStyle}>
            <span>
              <ICON.FaUser size={25}/>
            </span>
            <span>
              tai khoan
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}