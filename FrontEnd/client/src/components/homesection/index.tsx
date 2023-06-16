import React, { ReactElement } from 'react'
import '@styles/home.scss'
type Props = {
  title: string,
  subclass: string,
  children: ReactElement
}
export default function HomeSection(props: Props) {
  return (
    <div className={`home-section-component ${props.subclass}`}>
      <div className='home-section-title'>
        {props.title}
      </div>
      <div className='home-secion-container'>
        {props.children}
      </div>
    </div>
  )
}