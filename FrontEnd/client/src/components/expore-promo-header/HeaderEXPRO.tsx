import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import menu from '../../assets/menu.svg';
import { useCheckpoint } from '../../hooks';
import '../../styles/header.scss';
import * as ICON from '../common';

type Props = {
  trigger: number,
  setTrigger: (key:number)=>void
}

export default function HeaderEXPRO({ trigger,setTrigger}: Props) {
  const { deviceCurrent } = useCheckpoint('');
  const [open, setOpen] = useState<boolean>(false); 

  let activeStyle:React.CSSProperties = {
    borderBottom: '1px solid #ee0033',
    color: '#ee0033'
  }

  let unActiveStyle:React.CSSProperties = {
    borderTop: 'none'
  }

  let openDropDown = () => {
    setOpen(pre => !pre)
    setTrigger(1)
  }
  useEffect(() => {
    setOpen(false)
  }, [deviceCurrent])
  
  return (
    <>
      {deviceCurrent !== 'tablet' ? 
      <>
      <div className={'header-explore'}>    
      <NavLink to={'/explore'}  style = {({isActive}) => isActive?activeStyle : unActiveStyle}>
        <span className={'header-explore__icon'}>
          <ICON.FaSlackHash size={25}/>
        </span>
        <span className={'header-explore__text'}>
          Khám phá
        </span>
        </NavLink>
      </div>
      <div className={'header__discount'}>
        <NavLink to={'/promo'} style = {({isActive}) => isActive?activeStyle : unActiveStyle}>
          <span className={'header__discount-icon'}>
            <ICON.TbDiscount2 size={25}/>
          </span>
          <span className={'header__discount-text'}>
            Khuyến mãi
          </span>
        </NavLink>
      </div>
    </> :
    <div className='header__menu'>
      <div className='header__menu-button' onClick={() => openDropDown()}>
        <img src={menu} alt='' className='header__menu-button-image' />
      </div> 
      <CSSTransition
        in={open && trigger == 1}
        timeout={300}
        unmountOnExit
        classNames='modal-dropdown'
      >
      <div className='header__menu-dropdown'>
        <div className={'header__menu-dropdown-explore'}>
          <NavLink to={'/explore'} style = {({isActive}) => isActive?activeStyle : unActiveStyle}>
            <span className={'header__menu-dropdown-explore-icon'}>
              <ICON.FaSlackHash size={18}/>
            </span>
            <span className={'header__menu-dropdown-explore-text'}>
              Khám phá
            </span>
          </NavLink>
        </div>
        <div className={'header__menu-dropdown-discount'}>
          <NavLink to={'/discount'} style = {({isActive}) => isActive?activeStyle : unActiveStyle}>
            <span className={'header__menu-dropdown-discount-icon'}>
              <ICON.TbDiscount2 size={18}/>
            </span>
            <span className={'header__menu-dropdown-discount-text'}>
             Khuyến mãi
            </span>
          </NavLink>
        </div>
      </div>
      </CSSTransition>
    </div>    
    }
    </>
  )
}