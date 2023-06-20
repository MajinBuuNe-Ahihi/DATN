import React, { ReactElement } from 'react'
import * as ICON from './Icon'

type Props = {}
type Socials = { icon: ReactElement, name: string, link: string }

let sidebarSocial: Socials[] = [{ icon: <ICON.FaFacebookSquare size={25} />, name: 'facebook', link: '/'},
  { icon: <ICON.SiTiktok size={25} />, name: 'tiktok', link: '/' },
  { icon: <ICON.AiOutlineInstagram size={25} />, name: 'instagram', link: '/'}]

export function Social({ }: Props) {

  return (
    <>{
      sidebarSocial.map((e: Socials, index) =>   
        <li key={index} className='social__element'>
          <span className={`social__element-icon icon-${e.name}`}>
            {e.icon}
          </span>
          <a href={e.link} target={'_blank'} className='social__element-link'>{e.name}</a>
        </li>
      )
    }</>
  )
}