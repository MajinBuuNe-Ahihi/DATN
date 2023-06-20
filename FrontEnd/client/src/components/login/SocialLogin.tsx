import React from 'react'
import {BsFacebook, FcGoogle} from '../common'

type Props = {
  type: string
}

export default function SocialLogin({type}: Props) {
  return (
    <div className="social-login">
      <div className="social-login__icon">
        {type === 'facebook' ? <BsFacebook size={25} ></BsFacebook>:<FcGoogle size={25}></FcGoogle> }
      </div>
      <div className="social-login__label">
        { type }
      </div>
    </div>
  )
}