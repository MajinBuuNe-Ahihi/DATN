import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './common'
import '../styles/404.scss'
import image from '../assets/404.svg'
type Props = {}

export function Page404({}: Props) {
  return (
    <div className='page404'>
      <img className='page404__image' src={image} alt='PAGE NOT FOUND' />
      <h1 className='page404__title'>404 - TRANG KHONG TON TAI</h1>
      <Link className='page404__link' to={'/'}>
        <Button bg={1} type={2} padding={'10px 12px'}>
          <>
            Quay Ve trang chu
          </>
        </Button>
      </Link>
    </div>
  )
}