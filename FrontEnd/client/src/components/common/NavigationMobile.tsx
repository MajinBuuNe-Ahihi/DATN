import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ICON from './Icon'
import '../../styles/navigation-mobile.scss'
import { Resource } from '../../constants'

type Props = {}

const {Navigation} = Resource
export const NavigationMobile = (props: Props) => {
  let activeStyle:React.CSSProperties = {
    borderTop: '1px solid',
    color: '#ee0033'
  }
  let unActiveStyle:React.CSSProperties = {
    borderTop: '1px solid transparent'
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
              {Navigation.Home}
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
            {Navigation.Explore}
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
            {Navigation.Promo}
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
            {Navigation.BookMark}
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
            {Navigation.Account}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}