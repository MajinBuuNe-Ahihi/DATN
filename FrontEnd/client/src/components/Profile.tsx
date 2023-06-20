import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export  default function Profile({}: Props) {
  return (
    <div className="profile-wrapper">
      <Outlet/>
    </div>
  )
}